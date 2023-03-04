import { FormEvent, useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import {
    showTechnicalDifficultiesBanner,
    showBanner,
    hideBanner
} from '@/lib/redux/slices/banner'
import { UPDATED_PASSWORD } from '@/lib/gql/mutations/users'
import { setProfile } from '@/lib/redux/slices/user'
import { PW_VALIDATIONS, INITIAL_PW_STATE } from '../../auth/ResetPassword'
import useForm from '@/utilities/hooks/useForm'
import { TextField, FormRow } from '@/components/form'
import { StyledPasswordResetForm } from './StyledUserProfile.styles'

const PasswordResetForm = () => {
    const {
        form: { newPassword, confirmPassword },
        handleChange,
        isFormValid,
        handleReset,
        formLoading,
        setFormLoading,
        handleFormSubmit
    } = useForm(INITIAL_PW_STATE, PW_VALIDATIONS)
    const dispatch = useDispatch()

    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)

    useEffect(() => {
        if (newPassword.value && confirmPassword.value && !formLoading) {
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

    const [updatePassword] = useMutation(UPDATED_PASSWORD, {
        onCompleted({ updatePassword: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const profile = { ...data }

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
            }
            setFormLoading(false)
        },
        onError(err: any) {
            setFormLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            newPassword: newPassword.value
        }
    })

    const handlePasswordUpdate = (e: any) => {
        handleChange(e)
    }

    return (
        <StyledPasswordResetForm
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, updatePassword)
            }>
            <h3>Update Password</h3>
            <div className="formContent">
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
            </div>
            <FormRow>
                <LoadingButton
                    type="submit"
                    loading={formLoading}
                    disabled={disableSubmit}
                    className="submit"
                    variant="outlined">
                    Submit
                </LoadingButton>
                <Button onClick={handleReset} variant="outlined" color="error">
                    Reset
                </Button>
            </FormRow>
        </StyledPasswordResetForm>
    )
}

export default PasswordResetForm
