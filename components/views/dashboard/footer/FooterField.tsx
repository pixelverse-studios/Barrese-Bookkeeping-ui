import { useState, ReactNode } from 'react'
import {
    Email,
    Twitter,
    LinkedIn,
    Instagram,
    Facebook,
    Reddit,
    QuestionMark,
    Delete
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
    { icon: <Email />, value: 'Email' },
    { icon: <Facebook />, value: 'Facebook', color: '#4267B2' },
    {
        icon: <Instagram />,
        value: 'Instagram',
        color: 'radial-gradient(circle at 50% 100%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);'
    },
    { icon: <LinkedIn />, value: 'LinkedIn', color: '#0077b5' },
    { icon: <Reddit />, value: 'Reddit', color: '#FF5700' },
    { icon: <Twitter />, value: 'Twitter', color: '#1DA1F2' },
    { icon: <QuestionMark />, value: 'New Icon' }
]

// const getIcon: ReactNode | any = (title: string) => {
//     const match = iconOptions.filter(icon => icon.value === title)
//     if (match?.length) {
//         return match[0].icon
//     }

//     console.log(title)
//     return <QuestionMark />
// }

const SocialMediaDropdown = ({ value }: { value: string }) => (
    <MuiTextField id="newSocialMedia" select value={value} label="Icon">
        {iconOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.icon}
                {/* {getIcon(option.value)} */}
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
    expanded: string[]
}

const FooterField = ({
    icon,
    link,
    title,
    handleExpand,
    expanded
}: FooterFieldProps) => {
    const isCurrentlyExpanded = expanded.includes(title)
    const currentItem = iconOptions.filter(item => item.value === title)[0] as {
        icon: any
        value: string
        color: string
    }

    return (
        <Accordion
            expanded={isCurrentlyExpanded}
            disableGutters
            onChange={handleExpand(title)}>
            <AccordionSummary className="accordianSummary">
                {currentItem.icon}
            </AccordionSummary>
            <AccordionDetails>
                <StyledFooterField color={currentItem.color}>
                    {/* {isCurrentlyExpanded ? (
                        <span>Edit your {title} URL</span>
                    ) : (
                        ''
                    )} */}
                    <div className="inputs">
                        <SocialMediaDropdown value={title} />
                        <TextField
                            field={{ value: '', error: '' }}
                            id={title}
                            name={title.toLowerCase()}
                            label={title}
                            type="text"
                            onChange={() => console.log('skr')}
                        />
                    </div>
                    <Delete className="deleteItem" />
                </StyledFooterField>
            </AccordionDetails>
        </Accordion>
    )
}

export default FooterField
