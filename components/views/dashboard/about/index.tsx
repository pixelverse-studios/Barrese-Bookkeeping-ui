import { FormEvent, useState, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { EDIT_ABOUT } from '@/lib/gql/mutations/cms'
import { setAbout } from '@/lib/redux/slices/exports'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import {
    onImageUpload,
    CloudinaryCreationProps
} from '@/utilities/fileConversion'
import { FormRow, TextField, FileUpload } from '@/components/form'
import FormValidations from '@/utilities/validations/forms'
import useForm from '@/utilities/hooks/useForm'
import { StyledAboutForm, StyledAboutFields } from './StyledAboutWidget'
import { StyledUploadContainer } from '@/components/form/fields/Formfield.styles'
import { ButtonRow } from '@/components/form/Row.styles'
import { PartialLoader } from '@/components/loader'

const INITIAL_STATE = {
    backgroundInfo: { value: '', error: '' },
    role: { value: '', error: '' },
    title: { value: '', error: '' },
    header: { value: '', error: '' },
    subHeader: { value: '', error: '' },
    heroImage: { value: '', error: '' }
}

const VALIDATIONS = {
    backgroundInfo: FormValidations.yolo,
    role: FormValidations.yolo,
    title: FormValidations.yolo,
    header: FormValidations.yolo,
    subHeader: FormValidations.yolo,
    heroImage: FormValidations.yolo
}

const IMAGE_LABEL = 'heroImage'

const AboutWidget = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.cms)
    const { backgroundInfo, role, title, header, subHeader, heroImage } =
        useSelector((state: any) => state.about)

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
        handleImport({
            backgroundInfo,
            role,
            title,
            header,
            subHeader,
            heroImage
        })
    }, [])

    const [imgLoading, setImgLoading] = useState<boolean>(false)

    const handleImageClear = () =>
        handleNonFormEventChange(heroImage, IMAGE_LABEL)

    const handleImageUpload = async ({
        base64,
        filename
    }: CloudinaryCreationProps) => {
        setImgLoading(true)
        try {
            const heroImage = await onImageUpload({
                context: `cta-${IMAGE_LABEL}`,
                base64,
                filename
            })

            handleNonFormEventChange(heroImage, IMAGE_LABEL)
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

    const [editAbout] = useMutation(EDIT_ABOUT, {
        onCompleted({ editAbout: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const newAboutData = { ...data.about }
                delete newAboutData.__typename

                dispatch(setAbout(newAboutData))
                dispatch(
                    showBanner({
                        message: 'About page has been updated.',
                        type: data.__typename
                    })
                )
            }

            setFormLoading(false)
        },
        onError(err: any) {
            setFormLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            cmsId: id,
            input: {
                backgroundInfo: form.backgroundInfo.value,
                role: form.role.value,
                title: form.title.value,
                header: form.header.value,
                subHeader: form.subHeader.value,
                heroImage: form.heroImage.value
            }
        }
    })

    return (
        <StyledAboutForm
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, editAbout)
            }>
            <StyledUploadContainer>
                <FileUpload
                    loading={imgLoading}
                    name="heroImage"
                    id="heroImage"
                    onUpload={handleImageUpload}
                    value={form.heroImage.value}
                    clearValue={handleImageClear}
                />
                <h4>Page Image</h4>
            </StyledUploadContainer>
            <StyledAboutFields>
                <FormRow>
                    <TextField
                        field={form.role}
                        type="text"
                        id="role"
                        name="role"
                        label="Role"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                    <TextField
                        field={form.title}
                        type="text"
                        id="title"
                        name="title"
                        label="Title"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.backgroundInfo}
                        type="textarea"
                        id="backgroundInfo"
                        name="backgroundInfo"
                        label="Background Info"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.header}
                        type="text"
                        id="header"
                        name="header"
                        label="Header"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                    <TextField
                        field={form.subHeader}
                        type="text"
                        id="subHeader"
                        name="subHeader"
                        label="Sub Header"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
            </StyledAboutFields>
            <ButtonRow>
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
            </ButtonRow>
            <PartialLoader show={formLoading} />
        </StyledAboutForm>
    )
}

export default AboutWidget
