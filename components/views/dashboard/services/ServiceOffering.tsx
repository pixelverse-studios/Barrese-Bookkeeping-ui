import { useState, useEffect } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    IconButton,
    CircularProgress
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { CheckCircle, RemoveCircle, DeleteForever } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import {
    onImageUpload,
    CloudinaryCreationProps
} from '@/utilities/fileConversion'
import {
    CREATE_SERVICE_OFFERING,
    EDIT_SERVICE_OFFERINGS,
    DELETE_SERVICE_OFFERING
} from '@/lib/gql/mutations/cms'
import { setServices } from '@/lib/redux/slices/services'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import FormValidations from '@/utilities/validations/forms'
import useForm from '@/utilities/hooks/useForm'
import ServiceOfferingBullets from './ServiceOfferingBullets'
import { FormRow, TextField, FileUpload } from '@/components/form'
import { StyledUploadContainer } from '@/components/form/fields/Formfield.styles'
import { StyledServiceOffering, StyledModal } from './StyledServicesWidget'

interface FaqItemProps {
    _id?: string
    icon?: string
    title?: string
    description?: string
    bullets?: string[]
    cmsID: string
}

interface ModalProps extends FaqItemProps {
    open: boolean
    setOpen: Function
}

interface FormProps extends FaqItemProps {
    removeNewest: any
    index: number
}

const IMAGE_LABEL = 'icon'

const Modal = ({
    icon,
    title,
    description,
    bullets,
    _id,
    open,
    setOpen,
    cmsID
}: ModalProps) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<boolean>(false)

    const handleCancel = () => setOpen(false)

    const [deleteServiceOffering] = useMutation(DELETE_SERVICE_OFFERING, {
        onCompleted({ deleteServiceOffering: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const newServices = { ...data.services }
                delete newServices.__typename
                dispatch(setServices(newServices))
                dispatch(
                    showBanner({
                        message: 'Service offering has been deleted.',
                        type: data.__typename
                    })
                )
            }
            setLoading(false)
            setOpen(false)
        },
        onError(err: any) {
            dispatch(showTechnicalDifficultiesBanner())
            setLoading(false)
            setOpen(false)
        },
        variables: {
            offeringId: _id,
            cmsId: cmsID
        }
    })

    const handleConfirmDelete = () => {
        setLoading(true)
        deleteServiceOffering()
    }

    return (
        <Dialog open={open}>
            <StyledModal>
                <DialogTitle>Confirm Delete of</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <span>Title</span>
                        {title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton
                        loading={loading}
                        onClick={handleConfirmDelete}>
                        Confirm
                    </LoadingButton>
                    <Button onClick={handleCancel} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </StyledModal>
        </Dialog>
    )
}

const INITIAL_STATE = {
    icon: { value: '', error: '' },
    title: { value: '', error: '' },
    description: { value: '', error: '' },
    bullets: { value: [] as any, error: '' }
}

const VALIDATIONS = {
    icon: FormValidations.validImage,
    title: FormValidations.validAlphaNumericSpacesSpecials,
    description: FormValidations.validAlphaNumericSpacesSpecials,
    bullets: FormValidations.validArrayData
}

const ServiceOffering = ({
    icon,
    title,
    description,
    bullets,
    _id,
    removeNewest,
    cmsID,
    index
}: FormProps) => {
    const dispatch = useDispatch()
    const {
        form,
        handleChange,
        handleNonFormEventChange,
        handleImport,
        isFormValid,
        formLoading,
        setFormLoading
    } = useForm(INITIAL_STATE, VALIDATIONS)

    useEffect(() => {
        handleImport({ icon, title, description, bullets })
    }, [])

    const [open, setOpen] = useState<boolean>(false)
    const [imgLoading, setImgLoading] = useState<boolean>(false)
    const isNewItem = !_id

    const [createServiceOffering] = useMutation(CREATE_SERVICE_OFFERING, {
        onCompleted({ createServiceOffering: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const newServiceOffering = { ...data.services }
                delete newServiceOffering.__typename
                dispatch(setServices(newServiceOffering))
                dispatch(
                    showBanner({
                        message: 'FAQ item has been created.',
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
            cmsId: cmsID,
            input: {
                icon: form.icon.value,
                title: form.title.value,
                description: form.description.value,
                bullets: form.bullets.value
            }
        }
    })

    const [editServiceOffering] = useMutation(EDIT_SERVICE_OFFERINGS, {
        onCompleted({ editServiceOffering: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const editedOffering = { ...data.services }
                delete editedOffering.__typename
                dispatch(setServices(editedOffering))
                dispatch(
                    showBanner({
                        message: 'Service Offering has been edited.',
                        type: data.__typename
                    })
                )
            }

            setFormLoading(false)
        },
        onError(err: any) {
            setFormLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        }
    })

    const handleSubmit = () => {
        setFormLoading(true)
        if (isNewItem) {
            createServiceOffering()
        } else {
            editServiceOffering({
                variables: {
                    cmsId: cmsID,
                    offeringId: _id,
                    input: {
                        icon: form.icon.value,
                        title: form.title.value,
                        description: form.descriptionvalue,
                        bullets: form.bullets.value
                    }
                }
            })
        }
    }

    const handleImageUpload = async ({
        base64,
        filename
    }: CloudinaryCreationProps) => {
        setImgLoading(true)
        try {
            const offeringIcon = await onImageUpload({
                context: `serviceOffering-${IMAGE_LABEL}`,
                base64,
                filename
            })

            handleNonFormEventChange(offeringIcon, IMAGE_LABEL)
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

    const handleImageClear = () => handleNonFormEventChange(icon, IMAGE_LABEL)
    const handleUpdateBullets = (data: string[]) =>
        handleNonFormEventChange(data, 'bullets')

    return (
        <StyledServiceOffering>
            <h4>{isNewItem ? `New ` : null}FAQ</h4>
            <StyledUploadContainer
                className="serviceOfferingIconFile"
                disableCardStyles>
                <h4>Icon</h4>
                <FileUpload
                    loading={imgLoading}
                    name="icon"
                    id={`icon${index}`}
                    onUpload={handleImageUpload}
                    value={form.icon.value}
                    clearValue={handleImageClear}
                />
            </StyledUploadContainer>
            <FormRow>
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
                    field={form.description}
                    type="textarea"
                    id="description"
                    name="description"
                    label="Description"
                    onChange={handleChange}
                    disabled={formLoading}
                />
            </FormRow>
            <ServiceOfferingBullets
                bullets={form.bullets.value}
                updateBullets={handleUpdateBullets}
            />
            <div className="buttons">
                {formLoading ? (
                    <CircularProgress className="loader" />
                ) : (
                    <IconButton onClick={handleSubmit} disabled={!isFormValid}>
                        <CheckCircle className="submit" />
                    </IconButton>
                )}
                <IconButton
                    disabled={!isFormValid}
                    onClick={() => setOpen(true)}>
                    <RemoveCircle className="delete" />
                </IconButton>
                {isNewItem ? (
                    <IconButton onClick={removeNewest}>
                        <DeleteForever className="remove" />
                    </IconButton>
                ) : null}
            </div>
            <Modal
                open={open}
                setOpen={setOpen}
                title={title}
                _id={_id}
                cmsID={cmsID}
            />
        </StyledServiceOffering>
    )
}

export default ServiceOffering
