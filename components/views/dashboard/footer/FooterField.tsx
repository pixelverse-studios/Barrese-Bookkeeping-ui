import { useState, ReactNode } from 'react'
import {
    Email,
    Twitter,
    LinkedIn,
    Instagram,
    Facebook,
    Reddit,
    QuestionMark,
    Delete,
    Edit
} from '@mui/icons-material'
import {
    TextField as MuiTextField,
    MenuItem,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material'

import { TextField } from '@/components/form'

import { StyledFooterField } from './StyledFooterWidget'

const iconOptions = [
    { icon: <Email className="email" />, value: 'Email', className: 'email' },
    {
        icon: <Facebook className="facebook" />,
        value: 'Facebook',
        className: 'facebook'
    },
    {
        icon: <Instagram className="instagram" />,
        value: 'Instagram',
        className: 'instagram'
    },
    {
        icon: <LinkedIn className="linkedin" />,
        value: 'LinkedIn',
        className: 'linkedin'
    },
    {
        icon: <Reddit className="reddit" />,
        value: 'Reddit',
        className: 'reddit'
    },
    {
        icon: <Twitter className="twitter" />,
        value: 'Twitter',
        className: 'twitter'
    },
    {
        icon: <QuestionMark className="newIcon" />,
        value: 'New Icon',
        className: 'newIcon'
    }
]

const SocialMediaDropdown = ({
    value,
    onChange
}: {
    value: string
    onChange: any
}) => (
    <MuiTextField
        id="newSocialMedia"
        className="selectIcon"
        select
        onChange={onChange}
        value={value}
        label="Icon">
        {iconOptions.map(option => (
            <MenuItem
                key={option.value}
                value={option.value}
                className={option.className}>
                {option.icon}
            </MenuItem>
        ))}
    </MuiTextField>
)

interface IconProps {
    icon: any
    link: string
    title: string
}

interface FooterFieldProps extends IconProps {
    handleExpand: Function
    expanded: number[]
    id: number
    handleFormChange: Function
}

const FooterField = ({
    link,
    title,
    id,
    handleExpand,
    expanded,
    handleFormChange
}: FooterFieldProps) => {
    const isCurrentlyExpanded = expanded.includes(id)
    const currentItem = iconOptions.filter(item => item.value === title)[0] as {
        icon: any
        value: string
        className: string
    }
    const currentId = `${title}-${id}`

    const onIconChange = (e: any) =>
        handleFormChange({
            newValue: e.target.value,
            type: 'icon',
            id
        })

    const onLinkChange = (e: any) =>
        handleFormChange({
            newValue: e.target.value,
            type: 'link',
            id
        })

    return (
        <StyledFooterField>
            <Accordion
                expanded={isCurrentlyExpanded}
                onChange={handleExpand(id)}>
                <AccordionSummary
                    className={`accordianSummary ${currentItem.className}`}>
                    {currentItem.icon}
                </AccordionSummary>
                <AccordionDetails className="accordianDetails">
                    <div className="inputs">
                        <SocialMediaDropdown
                            value={title}
                            onChange={onIconChange}
                        />
                        <TextField
                            field={{
                                value: link,
                                error: !link ? 'Link must be provided' : ''
                            }}
                            id={currentId}
                            name={title.toLowerCase()}
                            label={title}
                            type="text"
                            onChange={onLinkChange}
                        />
                    </div>
                    <Delete className="deleteItem" />
                </AccordionDetails>
            </Accordion>
        </StyledFooterField>
    )
}

export default FooterField
