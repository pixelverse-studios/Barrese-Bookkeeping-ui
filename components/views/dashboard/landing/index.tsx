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
import { FormRow, TextField, FileUpload } from '@/components/form'
import FormValidations from '@/utilities/validations/forms'
import useForm from '@/utilities/hooks/useForm'
import {
    StyledLandingWidgtForm,
    StyledLandingFields
} from './StyledLandingWidget'

const INITIAL_STATE = {
    heroImage: { value: '', error: '' },
    heroBannerH1: { value: '', error: '' },
    heroBannerH2: { value: '', error: '' },
    subtext: { value: '', error: '' }
}

const VALIDATIONS = {
    heroImage: FormValidations.validAlphaNumeric,
    heroBannerH1: FormValidations.validAlphaNumericSpacesSpecials,
    heroBannerH2: FormValidations.validAlphaNumericSpacesSpecials,
    subtext: FormValidations.validAlphaNumericWithSpaces
}

const Landing = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.cmsData)
    const { heroImage, heroBannerH1, heroBannerH2, subtext } = useSelector(
        (state: any) => state.landing
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
        handleImport({ heroImage, heroBannerH1, heroBannerH2, subtext })
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
                const cta = { ...data.callToAction }

                delete cta.__typename
                delete cta.successType

                dispatch(setLanding(cta))

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
                subtext: form.subtext.value
            }
        }
    })

    return (
        <StyledLandingWidgtForm
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, editLanding)
            }>
            <FileUpload
                loading={imgLoading}
                name="profilePic"
                id="profilePic"
                onUpload={handleImageUpload}
                value={form.heroImage.value}
                clearValue={handleImageClear}
            />
            <StyledLandingFields>
                <TextField
                    field={form.heroBannerH1}
                    type="text"
                    id="heroBannerH1"
                    name="heroBannerH1"
                    label="Primary Hero Banner"
                    onChange={handleChange}
                    disabled={formLoading}
                />
                <TextField
                    field={form.heroBannerH2}
                    type="text"
                    id="heroBannerH2"
                    name="heroBannerH2"
                    label="Secondary Hero Banner"
                    onChange={handleChange}
                    disabled={formLoading}
                />
                <TextField
                    field={form.subtext}
                    type="text"
                    id="subtext"
                    name="subtext"
                    label="Subtext"
                    onChange={handleChange}
                    disabled={formLoading}
                />
            </StyledLandingFields>
            <FormRow>
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
            </FormRow>
        </StyledLandingWidgtForm>
    )
}

export default Landing
