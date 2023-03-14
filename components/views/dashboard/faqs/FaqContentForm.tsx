import { FormEvent, useState, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { EDIT_FAQ_CONTENT } from '@/lib/gql/mutations/cms'
import { setFaqs } from '@/lib/redux/slices/faqs'
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
import { StyledUploadContainer } from '@/components/form/fields/Formfield.styles'
import { ButtonRow } from '@/components/form/Row.styles'
import { StyledFaqsContentForm } from './StyledFAQsWidget'

const INITIAL_STATE = {
    pageH1: { value: '', error: '' },
    pageH2: { value: '', error: '' },
    heroImage: { value: '', error: '' }
}
const VALIDATIONS = {
    pageH1: FormValidations.validAlphaNumericSpacesSpecials,
    pageH2: FormValidations.validAlphaNumericSpacesSpecials,
    heroImage: FormValidations.validAlphaNumericWithSpaces
}
const IMAGE_LABEL = 'heroImage'

const FaqContentForm = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.cmsData)
    const { pageH1, pageH2, heroImage } = useSelector(
        (state: any) => state.faqs
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
    const [imgLoading, setImgLoading] = useState<boolean>(false)

    useEffect(() => {
        handleImport({
            pageH1,
            pageH2,
            heroImage
        })
    }, [])

    const handleImageUpload = async ({
        base64,
        filename
    }: CloudinaryCreationProps) => {
        setImgLoading(true)
        try {
            const heroImage = await onImageUpload({
                context: `faqs-${IMAGE_LABEL}`,
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

    const handleImageClear = () =>
        handleNonFormEventChange(heroImage, IMAGE_LABEL)

    const [editFaqContent] = useMutation(EDIT_FAQ_CONTENT, {
        onCompleted({ editFaqContent: data }) {
            try {
                if (data.__typename === 'Errors') {
                    dispatch(
                        showBanner({
                            message: data.message,
                            type: data.__typename
                        })
                    )
                } else {
                    const newFaqContent = { ...data.faqs }
                    delete newFaqContent.__typename
                    dispatch(setFaqs(newFaqContent))
                    dispatch(
                        showBanner({
                            message: 'FAQ content has been updated.',
                            type: data.__typename
                        })
                    )
                }
            } catch (error) {
                console.log(error)
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
                pageH1: form.pageH1.value,
                pageH2: form.pageH2.value,
                heroImage: form.heroImage.value
            }
        }
    })

    return (
        <StyledFaqsContentForm
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, editFaqContent)
            }>
            <StyledUploadContainer disableCardStyles>
                <FileUpload
                    loading={imgLoading}
                    name="heroImage"
                    id="heroImage"
                    onUpload={handleImageUpload}
                    value={form.heroImage.value}
                    clearValue={handleImageClear}
                />
            </StyledUploadContainer>
            <div className="inputs">
                <FormRow>
                    <TextField
                        field={form.pageH1}
                        type="text"
                        id="pageH1"
                        name="pageH1"
                        label="Page Header"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                    <TextField
                        field={form.pageH2}
                        type="text"
                        id="pageH2"
                        name="pageH2"
                        label="Secondary Page Header"
                        onChange={handleChange}
                        disabled={formLoading}
                    />
                </FormRow>
            </div>
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
        </StyledFaqsContentForm>
    )
}

export default FaqContentForm
