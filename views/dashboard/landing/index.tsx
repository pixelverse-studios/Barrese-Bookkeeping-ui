import { FormEvent, useState, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { EDIT_LANDING } from '@/lib/gql/mutations/cms'
import { setLanding } from '@/lib/redux/slices/landing'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import {
    onImageUpload,
    CloudinaryCreationProps
} from '@/utilities/fileConversion'
import { TextField, FileUpload } from '@/components/form'
import FormValidations from '@/utilities/validations/forms'
import useForm from '@/utilities/hooks/useForm'
import { PartialLoader } from '@/components/loader'
import {
    StyledLandingWidgtForm,
    StyledLandingFields
} from './StyledLandingWidget'
import { StyledUploadContainer } from '@/components/form/fields/Formfield.styles'
import FormRow, { ButtonRow } from '@/components/form/Row.styles'

const INITIAL_STATE = {
    heroImage: { value: '', error: '' },
    heroBannerH1: { value: '', error: '' },
    heroBannerH2: { value: '', error: '' },
    subtext: { value: '', error: '' },
    header: { value: '', error: '' },
    subHeader: { value: '', error: '' }
}

const VALIDATIONS = {
    heroImage: FormValidations.yolo,
    heroBannerH1: FormValidations.yolo,
    heroBannerH2: FormValidations.yolo,
    subtext: FormValidations.yolo,
    header: FormValidations.yolo,
    subHeader: FormValidations.yolo
}

const Landing = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.cms)
    const {
        heroImage,
        heroBannerH1,
        heroBannerH2,
        subtext,
        header,
        subHeader
    } = useSelector((state: any) => state.landing)

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
            heroImage,
            heroBannerH1,
            heroBannerH2,
            subtext,
            header,
            subHeader
        })
    }, [])

    const [imgLoading, setImgLoading] = useState<boolean>(false)

    const handleImageUpload = async ({
        base64,
        filename
    }: CloudinaryCreationProps) => {
        setImgLoading(true)
        try {
            const newHero = await onImageUpload({
                context: 'landing-hero',
                base64,
                filename
            })

            handleNonFormEventChange(newHero, 'heroImage')
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

    const handleImageClear = () => handleNonFormEventChange(null, 'heroImage')
    const onResetClick = () => {
        handleImageClear()
        handleReset()
    }

    const [editLanding] = useMutation(EDIT_LANDING, {
        onCompleted({ editLanding: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const landing = { ...data.landing }

                delete landing.__typename
                delete landing.successType

                dispatch(setLanding(landing))

                dispatch(
                    showBanner({
                        message: 'Landing PAge has been updated!',
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
                heroImage: form.heroImage.value,
                heroBannerH1: form.heroBannerH1.value,
                heroBannerH2: form.heroBannerH2.value,
                subtext: form.subtext.value,
                header: form.header.value,
                subHeader: form.subHeader.value
            }
        }
    })

    return (
        <StyledLandingWidgtForm
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, editLanding)
            }>
            <StyledUploadContainer>
                <FileUpload
                    loading={imgLoading}
                    name="profilePic"
                    id="profilePic"
                    onUpload={handleImageUpload}
                    value={form.heroImage.value}
                    clearValue={handleImageClear}
                />
            </StyledUploadContainer>
            <StyledLandingFields>
                <FormRow>
                    <TextField
                        field={form.heroBannerH1}
                        type="textarea"
                        id="heroBannerH1"
                        name="heroBannerH1"
                        label="Primary Hero Banner"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                    <TextField
                        field={form.heroBannerH2}
                        type="textarea"
                        id="heroBannerH2"
                        name="heroBannerH2"
                        label="Secondary Hero Banner"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.subtext}
                        type="text"
                        id="subtext"
                        name="subtext"
                        label="Subtext"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
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
            </StyledLandingFields>
            <ButtonRow>
                <LoadingButton
                    type="submit"
                    loading={formLoading}
                    disabled={!isFormValid}
                    className="submit"
                    variant="outlined">
                    Submit
                </LoadingButton>
                <Button onClick={onResetClick} variant="outlined" color="error">
                    Reset
                </Button>
            </ButtonRow>
            <PartialLoader show={formLoading} />
        </StyledLandingWidgtForm>
    )
}

export default Landing
