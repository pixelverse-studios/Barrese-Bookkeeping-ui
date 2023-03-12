import { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

import FooterField from './FooterField'
import { StyledFooterForm, StyledFooterFields } from './StyledFooterWidget'

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
    const { id } = useSelector((state: any) => state.cmsData)
    const { contactLinks } = useSelector((state: any) => state.footer)

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

        setExpanded([...expanded, expanded.length + 1])
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
        const formCopy = [...form]
        delete formCopy[id]
        setForm()
    }

    return (
        <StyledFooterForm>
            <div className="formHeader">
                <h4>Contact & Social Media Links</h4>
                <Switch checked={expandAll} onChange={handleCheckAll} />
            </div>
            <StyledFooterFields>
                {form?.length
                    ? form.map(
                          (
                              {
                                  icon,
                                  link,
                                  title
                              }: {
                                  icon: string
                                  link: string
                                  title: string
                              },
                              key
                          ) => (
                              <FooterField
                                  key={key}
                                  id={key}
                                  icon={icon}
                                  link={link}
                                  title={title}
                                  expanded={expanded}
                                  handleExpand={handleExpand}
                                  handleFormChange={handleFormChange}
                                  handleDelete={handleDelete}
                              />
                          )
                      )
                    : null}
                <div className="addItem">
                    <AddCircle onClick={handleAddNewField} />
                    <p>Add a new contact or social media item</p>
                </div>
            </StyledFooterFields>
        </StyledFooterForm>
    )
}

export default FooterWidget
