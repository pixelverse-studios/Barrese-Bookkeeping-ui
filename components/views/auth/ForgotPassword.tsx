import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { LoadingButton } from '@mui/lab'

import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import { AppDispatch } from '@/lib/redux/store'
import { SEND_PASSWORD_RESET } from '@/lib/gql/mutations/users'
import { FormProps } from '@/utilities/types/formTypes'
import useForm from '@/utilities/hooks/useForm'
import FormValidations from '@/utilities/validations/forms'
import { TextField, FormRow } from '@/components/form'
import { StyledAuthPage } from './AuthPage.styles'

const INITIAL_STATE = {
    email: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: FormValidations.validEmail
}

const ForgotPassword = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { email } = form
    const [loading, setLoading] = useState<boolean>(false)

    const [sendResetPasswordEmail] = useMutation(SEND_PASSWORD_RESET, {
        onCompleted({ sendPasswordResetEmail: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(
                    showBanner({
                        message:
                            'An email was sent out to you with instructions.',
                        type: data.__typename
                    })
                )
                handleReset()
            }

            setLoading(false)
        },
        onError(err: any) {
            setLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            email: email.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        sendResetPasswordEmail()
    }

    return (
        <StyledAuthPage>
            <div className="formContainer">
                <h1 className="header">Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
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
                        <LoadingButton
                            type="submit"
                            loading={loading}
                            disabled={!isFormValid}
                            variant="outlined">
                            Submit
                        </LoadingButton>
                        <div className="option">
                            <Link className="forgotPw" href="/login">
                                Remember Password?
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </StyledAuthPage>
    )
}

export default ForgotPassword
