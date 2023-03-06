import { useState, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import {
    showBanner,
    hideBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import {
    onImageUpload,
    CloudinaryCreationProps
} from '@/utilities/fileConversion'
import { FormRow, TextField, FileUpload } from '@/components/form'
import FormValidations from '@/utilities/validations/forms'
import useForm from '@/utilities/hooks/useForm'
import { StyledCtaForm, StyledCtaFields, StyledCtaUploadPic } from './StyledCTA'

const INITIAL_STATE = {
    image: { value: '', error: '' },
    heading: { value: '', error: '' },
    description: { value: '', error: '' },
    buttonLabel: { value: '', error: '' }
}

const VALIDATIONS = {
    image: FormValidations.validAlphaNumeric,
    heading: FormValidations.validAlphaNumeric,
    description: FormValidations.validAlphaNumeric,
    buttonLabel: FormValidations.validAlphaNumeric
}

const CallToAction = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.cmsData)
    const { image, heading, description, buttonLabel } = useSelector(
        (state: any) => state.callToAction
    )

    const {
        form,
        handleChange,
        handleImport,
        handleNonFormEventChange,
        isFormValid,
        handleReset,
        formLoading,
        setFormLoading,
        handleFormSubmit
    } = useForm(INITIAL_STATE, VALIDATIONS)

    useEffect(() => {
        handleImport({ image, heading, description, buttonLabel })
    }, [])

    const [imgLoading, setImgLoading] = useState<boolean>(false)

    const handleImageClear = () => handleNonFormEventChange(image, 'image')

    const handleImageUpload = async ({
        base64,
        filename
    }: CloudinaryCreationProps) => {
        setImgLoading(true)
        try {
            const ctaImage = await onImageUpload({
                context: 'cta-image',
                base64,
                filename
            })

            console.log('ctaImage: ', ctaImage)
            handleNonFormEventChange(ctaImage, 'image')
            setImgLoading(false)
            return true
        } catch (error) {
            setFormLoading(false)
            dispatch(
                showBanner({
                    type: 'Errors',
                    message:
                        'There was an issue uploading your image. Please try again'
                })
            )
            setImgLoading(false)
            return false
        }
    }

    const onFormSubmit = async () => {}

    return (
        <StyledCtaForm>
            <StyledCtaUploadPic>
                <FileUpload
                    loading={imgLoading}
                    name="profilePic"
                    id="profilePic"
                    onUpload={handleImageUpload}
                    value={form.image.value}
                    clearValue={handleImageClear}
                />
            </StyledCtaUploadPic>
            <StyledCtaFields>
                <FormRow>
                    <TextField
                        field={form.heading}
                        type="text"
                        id="heading"
                        name="heading"
                        label="Header"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.description}
                        type="textarea"
                        id="description"
                        name="description"
                        label="Description"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.buttonLabel}
                        type="text"
                        id="buttonLabel"
                        name="buttonLabel"
                        label="Button Label"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
            </StyledCtaFields>
            <FormRow>
                <LoadingButton
                    type="submit"
                    loading={formLoading}
                    disabled={!isFormValid}
                    className="submit"
                    variant="outlined">
                    Submit
                </LoadingButton>
                <Button onClick={handleReset} variant="outlined" color="error">
                    Reset
                </Button>
            </FormRow>
        </StyledCtaForm>
    )
}

export default CallToAction
