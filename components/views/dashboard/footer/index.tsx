import { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch } from '@mui/material'

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

    const [form, setForm] = useState<null | [contactLinkType]>(null)

    useEffect(() => {
        // setForm(contactLinks)
        setForm([
            { icon: 'twitter', link: 'testing', title: 'Twitter' },
            { icon: 'twitter', link: 'testing', title: 'Facebook' }
        ])
    }, [contactLinks])

    const [expanded, setExpanded] = useState<string[]>([])
    const [expandAll, setExpandAll] = useState<boolean>(false)

    const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target
        setExpandAll(checked)

        if (checked) {
            const all = form?.map(item => item.title) as any
            setExpanded(all)
        } else {
            setExpanded([])
        }
    }

    const handleExpand =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
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

    return (
        <StyledFooterForm>
            <div className="formHeader">
                <h4>Contact & Social Media Links</h4>
                <Switch checked={expandAll} onChange={handleCheckAll} />
            </div>
            <StyledFooterFields>
                {form?.length
                    ? form.map(
                          ({
                              icon,
                              link,
                              title
                          }: {
                              icon: string
                              link: string
                              title: string
                          }) => (
                              <FooterField
                                  icon={icon}
                                  link={link}
                                  title={title}
                                  handleExpand={handleExpand}
                                  expanded={expanded}
                              />
                          )
                      )
                    : null}
                {/* <FooterField
                    handleExpand={handleExpand}
                    expanded={expanded}
                    icon=""
                    link=""
                    title="New Icon"
                /> */}
            </StyledFooterFields>
        </StyledFooterForm>
    )
}

export default FooterWidget
