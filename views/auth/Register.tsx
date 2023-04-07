import { FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import { LoadingButton } from '@mui/lab'

import {
    showTechnicalDifficultiesBanner,
    showBanner
} from '../../lib/redux/slices/banner'
import useForm from '../../utilities/hooks/useForm'
import { TextField, FormRow } from '../../components/form'
import { FormProps } from '../../utilities/types/formTypes'
import { JWT_SECRET } from '../../utilities/constants'
import FormValidations from '../../utilities/validations/forms'
import { AppDispatch } from '../../lib/redux/store'
import { REGISTER } from '../../lib/gql/mutations/users'
import { setLoading, setProfile } from '../../lib/redux/slices/user'
import { StyledAuthPage } from './AuthPage.styles'

const INITIAL_STATE = {
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    firstName: FormValidations.validAlphaString,
    lastName: FormValidations.validAlphaString,
    email: FormValidations.validEmail,
    password: FormValidations.validPassword
}

const Register = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const user = useSelector((state: any) => state.user)
    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )

    const { firstName, lastName, email, password } = form

    const [register] = useMutation(REGISTER, {
        onCompleted({ register: data }) {
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
                        message: 'User created in successfully',
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
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(setLoading(true))
        register()
    }

    return (
        <StyledAuthPage>
            <div className="formContainer">
                <h1 className="header">Register</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={user?.loading}>
                        <FormRow>
                            <TextField
                                type="text"
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                field={firstName}
                                onChange={handleChange}
                            />
                            <TextField
                                type="text"
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                field={lastName}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow>
                            <TextField
                                field={email}
                                type="email"
                                id="email"
                                name="email"
                                label="Email"
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                field={password}
                                onChange={handleChange}
                                type="password"
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
                            Already a user? <Link href="/login">Sign In</Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </StyledAuthPage>
    )
}

export default Register
