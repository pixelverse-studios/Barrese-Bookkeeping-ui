import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

import ServiceOffering from './ServiceOffering'
import { StyledServiceOfferings } from './StyledServicesWidget'

const ServiceItems = () => {
    const { id } = useSelector((state: any) => state.cmsData)
    const { offerings } = useSelector((state: any) => state.services)
    const [items, setItems] = useState<any>([])

    useEffect(() => {
        setItems(offerings)
    }, [offerings])

    const handleAddNewItem = () => {
        const itemsCopy = [...items]
        itemsCopy.push({ icon: '', title: '', description: '', bullets: [] })
        setItems(itemsCopy)
    }

    const removeNewest = () => {
        const itemsCopy = [...items]
        itemsCopy.pop()
        setItems(itemsCopy)
    }

    return (
        <StyledServiceOfferings>
            <div className="header">
                <h3>Service Offerings</h3>
                <IconButton onClick={handleAddNewItem}>
                    <AddCircle />
                </IconButton>
            </div>
            <div className="items">
                {items.map((item: any, key: number) => (
                    <ServiceOffering
                        {...item}
                        index={key}
                        cmsID={id}
                        removeNewest={removeNewest}
                    />
                ))}
            </div>
        </StyledServiceOfferings>
    )
}

export default ServiceItems
