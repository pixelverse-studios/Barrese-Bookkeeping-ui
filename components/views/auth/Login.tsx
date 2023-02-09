import { FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import { LoadingButton } from '@mui/lab'

import { setLoading, setProfile } from '../../../lib/redux/slices/user'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '../../../lib/redux/slices/banner'
import { AppDispatch } from '../../../lib/redux/store'
import { LOGIN } from '../../../lib/gql/mutations/users'
import { JWT_SECRET } from '../../../utilities/constants'
import { FormProps } from '@/utilities/types/formTypes'
import useForm from '@/utilities/hooks/useForm'
import FormValidations from '@/utilities/validations/forms'
import { FormRow, TextField } from '@/components/form/'
import { StyledAuthPage } from './AuthPage.styles'
// import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    email: { value: '', error: '' },
    password: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: FormValidations.validEmail,
    password: FormValidations.validPassword
}

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const user = useSelector((state: any) => state.user)
    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { email, password } = form

    const [login] = useMutation(LOGIN, {
        onCompleted({ login: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const profile = { ...data }
                const token = data.token
                localStorage.setItem(JWT_SECRET, token)

                delete profile.__typename
                delete profile.successType
                delete profile.token
                dispatch(setProfile(profile))
                dispatch(
                    showBanner({
                        message: 'User logged in successfully',
                        type: data.__typename
                    })
                )

                handleReset()
            }
            dispatch(setLoading(false))
            router.push('/dashboard')
        },
        onError(err: any) {
            dispatch(setLoading(false))
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            email: email.value,
            password: password.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log('submit')
        event.preventDefault()
        dispatch(setLoading(true))
        login()
    }

    return (
        <StyledAuthPage>
            <div className="formContainer">
                <h1 className="header">Login</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={user?.loading}>
                        <FormRow>
                            <TextField
                                type="email"
                                id="email"
                                name="email"
                                label="Enter email"
                                field={email}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow>
                            <TextField
                                type="password"
                                id="password"
                                name="password"
                                label="Enter password"
                                field={password}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <LoadingButton
                            type="submit"
                            loading={user?.loading}
                            disabled={!isFormValid}
                            variant="outlined">
                            Submit
                        </LoadingButton>
                        <div className="option">
                            <Link href="/password/forgot">
                                Forgot Password?
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </StyledAuthPage>
    )
}

export default Login
