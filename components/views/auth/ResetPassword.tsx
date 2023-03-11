import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { LoadingButton } from '@mui/lab'

import { AppDispatch } from '@/lib/redux/store'
import useForm from '@/utilities/hooks/useForm'
import { FormProps } from '@/utilities/types/formTypes'
import {
    showTechnicalDifficultiesBanner,
    showBanner,
    hideBanner
} from '@/lib/redux/slices/banner'
import { FormRow, TextField } from '@/components/form'
import FormValidations from '@/utilities/validations/forms'
import { setLoading, setProfile } from '@/lib/redux/slices/user'
import { JWT_SECRET } from '@/utilities/constants'
import { RESET_PASSWORD } from '@/lib/gql/mutations/users'
import { StyledAuthPage } from './AuthPage.styles'

export const INITIAL_PW_STATE = {
    newPassword: { value: '', error: '' },
    confirmPassword: { value: '', error: '' }
} as FormProps

export const PW_VALIDATIONS = {
    newPassword: FormValidations.validPassword,
    confirmPassword: FormValidations.validPassword
}

const ResetPassword = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const user = useSelector((state: any) => state.user)
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false)

    const { form, handleChange, isFormValid, handleReset } = useForm(
        INITIAL_PW_STATE,
        PW_VALIDATIONS
    )
    const { newPassword, confirmPassword } = form

    const [resetPassword] = useMutation(RESET_PASSWORD, {
        onCompleted({ resetPassword: data }) {
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
                        message: 'Your password has sucessfully been changed.',
                        type: data.__typename
                    })
                )
                handleReset()
                router.push('/')
            }
            dispatch(setLoading(false))
        },
        onError(err: any) {
            dispatch(setLoading(false))
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            token: router.query.token,
            newPassword: newPassword.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsFormSubmitting(true)
        dispatch(setLoading(true))
        resetPassword()
    }

    const handlePasswordUpdate = (e: any) => {
        setIsFormSubmitting(false)
        handleChange(e)
    }

    useEffect(() => {
        if (newPassword.value && confirmPassword.value && !isFormSubmitting) {
            const passwordsMatch = newPassword.value === confirmPassword.value
            const isValid = passwordsMatch && isFormValid

            dispatch(
                isValid
                    ? hideBanner()
                    : showBanner({
                          message: 'Passwords do not match',
                          type: 'Errors',
                          duration: 'permanant'
                      })
            )
            setDisableSubmit(!isValid)
        }
    })

    return (
        <StyledAuthPage>
            <div className="formContainer">
                <h1 className="header">Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={user?.loading}>
                        <FormRow>
                            <TextField
                                id="newPassword"
                                name="newPassword"
                                label="New Password"
                                field={newPassword}
                                onChange={handlePasswordUpdate}
                                type="password"
                            />
                        </FormRow>
                        <FormRow>
                            <TextField
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                field={confirmPassword}
                                onChange={handlePasswordUpdate}
                                type="password"
                            />
                        </FormRow>
                        <LoadingButton
                            type="submit"
                            loading={user?.loading}
                            disabled={disableSubmit}
                            variant="outlined">
                            Submit
                        </LoadingButton>
                    </fieldset>
                </form>
            </div>
        </StyledAuthPage>
    )
}

export default ResetPassword
