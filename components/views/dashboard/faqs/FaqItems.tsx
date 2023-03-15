import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

import FaqItem from './FaqItem'
import { StyledFaqItems } from './StyledFAQsWidget'

const FaqItems = () => {
    const { id } = useSelector((state: any) => state.cmsData)
    const { qAndA } = useSelector((state: any) => state.faqs)
    const [items, setItems] = useState<any>([])

    useEffect(() => {
        setItems(qAndA)
    }, [qAndA])

    const handleAddNewItem = () => {
        const itemsCopy = [...items]
        itemsCopy.push({ question: '', answer: '', id: '' })
        setItems(itemsCopy)
    }

    const removeNewest = () => {
        const itemsCopy = [...items]
        itemsCopy.pop()
        setItems(itemsCopy)
    }

    return (
        <StyledFaqItems>
            <div className="header">
                <h3>FAQ Items</h3>
                <IconButton onClick={handleAddNewItem}>
                    <AddCircle />
                </IconButton>
            </div>
            <div className="items">
                {items.map(
                    (item: {
                        question: string
                        answer: string
                        id: string
                    }) => (
                        <FaqItem
                            {...item}
                            cmsID={id}
                            removeNewest={removeNewest}
                        />
                    )
                )}
            </div>
        </StyledFaqItems>
    )
}

export default FaqItems
