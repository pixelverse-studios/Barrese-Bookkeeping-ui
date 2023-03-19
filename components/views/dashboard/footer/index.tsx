import {
    useState,
    useEffect,
    SyntheticEvent,
    ChangeEvent,
    FormEvent
} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LoadingButton } from '@mui/lab'
import { Switch } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import { useMutation } from '@apollo/client'

import { EDIT_FOOTER } from '@/lib/gql/mutations/cms'
import { setFooter } from '@/lib/redux/slices/footer'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import FooterField from './FooterField'
import { PartialLoader } from '@/components/loader'
import { StyledFooterForm, StyledFooterFields } from './StyledFooterWidget'
import { ButtonRow } from '@/components/form/Row.styles'

interface contactLinkType {
    icon: any
    link: string
    title: string
}

const newContactType = {
    icon: '',
    link: '',
    title: 'New Icon'
}

const FooterWidget = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.cms)
    const { contactLinks } = useSelector((state: any) => state.footer)

    const [formLoading, setFormLoading] = useState<boolean>(false)
    const [form, setForm] = useState<contactLinkType[]>([])

    useEffect(() => {
        setForm(contactLinks)
    }, [contactLinks])

    const [expanded, setExpanded] = useState<number[]>([])
    const [expandAll, setExpandAll] = useState<boolean>(false)

    const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target
        setExpandAll(checked)

        if (checked) {
            const all = form?.map((_, id) => id)
            setExpanded(all)
        } else {
            setExpanded([])
        }
    }

    const handleExpand =
        (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
            const newExpandedItems = [...expanded]

            if (isExpanded) {
                newExpandedItems.push(panel)
                return setExpanded(newExpandedItems)
            } else {
                setExpandAll(false)
                return setExpanded(
                    newExpandedItems.filter(item => item !== panel)
                )
            }
        }

    const handleAddNewField = () => {
        const newForm = [...form]
        newForm.push(newContactType)
        setForm(newForm)

        const newExpanded = [...expanded, expanded.length + 1]
        setExpanded(newExpanded)
    }

    const handleFormChange = ({
        newValue,
        type,
        id
    }: {
        newValue: string
        type: 'icon' | 'link' | 'delete'
        id: number
    }) => {
        const formCopy = [...form]
        const itemToEdit = { ...formCopy[id] }

        switch (type) {
            case 'icon':
                itemToEdit.icon = newValue
                itemToEdit.title = newValue
                break
            case 'link':
                itemToEdit.link = newValue
                break
            default:
                break
        }

        formCopy[id] = itemToEdit
        setForm(formCopy)
    }

    const handleDelete = (id: number) => {
        const editedForm = [...form]
        editedForm.splice(id, 1)
        setForm(editedForm)

        setExpanded([...expanded].filter(item => item !== id))
    }

    const [editFooter] = useMutation(EDIT_FOOTER, {
        onCompleted({ editFooter: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const footer = { ...data.footer }

                delete footer.__typename
                delete footer.successType

                dispatch(setFooter(footer.contactLinks))

                dispatch(
                    showBanner({
                        message: 'Footer has been updated!',
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

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormLoading(true)
        const payload = form.map(item => ({
            link: item.link,
            icon: item.icon,
            title: item.title
        }))

        await editFooter({
            variables: {
                cmsId: id,
                input: {
                    contactLinks: payload
                }
            }
        })
        setFormLoading(false)
        setExpandAll(false)
        setExpanded([])
    }

    return (
        <StyledFooterForm onSubmit={onFormSubmit}>
            <div className="formHeader">
                <h4>Contact & Social Media Links</h4>
                <Switch checked={expandAll} onChange={handleCheckAll} />
            </div>
            <StyledFooterFields>
                <>
                    {form?.length
                        ? form.map((item, key): {} => (
                              <FooterField
                                  key={key}
                                  id={key}
                                  icon={item.icon}
                                  link={item.link}
                                  title={item.title}
                                  expanded={expanded}
                                  handleExpand={handleExpand}
                                  handleFormChange={handleFormChange}
                                  handleDelete={handleDelete}
                              />
                          ))
                        : null}
                </>
                <div onClick={handleAddNewField} className="addItem">
                    <AddCircle />
                    <p>Add a new contact or social media item</p>
                </div>
            </StyledFooterFields>
            <ButtonRow>
                <LoadingButton
                    type="submit"
                    loading={formLoading}
                    disabled={false}
                    className="submit"
                    variant="outlined">
                    Submit
                </LoadingButton>
            </ButtonRow>
            <PartialLoader show={formLoading} />
        </StyledFooterForm>
    )
}

export default FooterWidget
