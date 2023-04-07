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
    CREATE_FAQ_ITEM,
    DELETE_FAQ_ITEM,
    EDIT_FAQ_ITEM
} from '@/lib/gql/mutations/cms'
import { setFaqs } from '@/lib/redux/slices/faqs'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import FormValidations from '@/utilities/validations/forms'
import useForm from '@/utilities/hooks/useForm'
import { FormRow, TextField } from '@/components/form'
import { StyledFaqItem, StyledModal } from './StyledFAQsWidget'
import { PartialLoader } from '@/components/loader'

interface FaqItemProps {
    _id?: string
    question?: string
    answer?: string
    cmsID: string
}

interface ModalProps extends FaqItemProps {
    open: boolean
    setOpen: Function
}

interface FormProps extends FaqItemProps {
    removeNewest: any
}

const Modal = ({ question, answer, _id, open, setOpen, cmsID }: ModalProps) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<boolean>(false)

    const handleCancel = () => setOpen(false)

    const [deleteFaqItem] = useMutation(DELETE_FAQ_ITEM, {
        onCompleted({ deleteFaqItem: data }) {
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
                        message: 'FAQ item has been deleted.',
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
            faqId: _id,
            cmsId: cmsID
        }
    })

    const handleConfirmDelete = () => {
        setLoading(true)
        deleteFaqItem()
    }

    return (
        <Dialog open={open}>
            <StyledModal>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <span>Question: </span>
                        {question}
                    </DialogContentText>
                    <br />
                    <DialogContentText>
                        <span>Answer: </span>
                        {answer}
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
    question: { value: '', error: '' },
    answer: { value: '', error: '' }
}

const VALIDATIONS = {
    question: FormValidations.yolo,
    answer: FormValidations.yolo
}

const FaqItem = ({ question, answer, _id, removeNewest, cmsID }: FormProps) => {
    const dispatch = useDispatch()
    const {
        form,
        handleChange,
        handleImport,
        isFormValid,
        formLoading,
        setFormLoading
    } = useForm(INITIAL_STATE, VALIDATIONS)

    useEffect(() => {
        handleImport({ question, answer })
    }, [])

    const [open, setOpen] = useState<boolean>(false)
    const isNewItem = !_id

    const [createFaqItem] = useMutation(CREATE_FAQ_ITEM, {
        onCompleted({ createFaqItem: data }) {
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
                question: form.question.value,
                answer: form.answer.value
            }
        }
    })

    const [editFaqItem] = useMutation(EDIT_FAQ_ITEM, {
        onCompleted({ editFaqItem: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const editedFaqContent = { ...data.faqs }
                delete editedFaqContent.__typename
                dispatch(setFaqs(editedFaqContent))
                dispatch(
                    showBanner({
                        message: 'FAQ item has been edited.',
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
            createFaqItem()
        } else {
            editFaqItem({
                variables: {
                    cmsId: cmsID,
                    faqId: _id,
                    input: {
                        question: form.question.value,
                        answer: form.answer.value
                    }
                }
            })
        }
    }

    return (
        <StyledFaqItem>
            <h4>{isNewItem ? `New ` : null}FAQ</h4>
            <FormRow>
                <TextField
                    field={form.question}
                    type="text"
                    id="question"
                    name="question"
                    label="Question"
                    onChange={handleChange}
                    disabled={formLoading}
                />
            </FormRow>
            <FormRow>
                <TextField
                    field={form.answer}
                    type="textarea"
                    id="answer"
                    name="answer"
                    label="Answer"
                    onChange={handleChange}
                    disabled={formLoading}
                />
            </FormRow>
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
                question={question}
                answer={answer}
                _id={_id}
                cmsID={cmsID}
            />
            <PartialLoader show={formLoading} />
        </StyledFaqItem>
    )
}

export default FaqItem
