import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Edit, RemoveCircle, AddCircle, Delete } from '@mui/icons-material'

import { TextField } from '@/components/form'
import { StyledBackgroundInfoBlock } from './StyledAboutWidget'

interface BackgroundInfoProps {
    backgroundInfo: string[]
    handleChange: Function
    formLoading: boolean
}

const LABEL = 'backgroundInfo'

const BackgroundInfoBlock = ({
    backgroundInfo,
    handleChange,
    formLoading
}: BackgroundInfoProps) => {
    const [currentItem, setCurrentItem] = useState<string>('')
    const [editingIndex, setEditingIndex] = useState<number | null>(null)

    const onWipe = () => {
        setCurrentItem('')
        setEditingIndex(null)
    }

    const onFieldUpdate = (e: any) => {
        setCurrentItem(e.target.value)
    }

    const onSubmitClick = () => {
        const updatedBg = [...backgroundInfo]
        if (editingIndex == null) {
            updatedBg.push(currentItem)
        } else {
            updatedBg[editingIndex] = currentItem
        }

        handleChange(updatedBg, LABEL)
        onWipe()
    }

    const onEditClick = (index: number, p: string) => {
        setEditingIndex(index)
        setCurrentItem(p)
    }

    const onDeleteClick = (index: number) => {
        const updatedBg = [...backgroundInfo]
        updatedBg.splice(index, 1)

        handleChange(updatedBg, LABEL)
    }

    return (
        <StyledBackgroundInfoBlock>
            <div className="inputWrapper">
                <TextField
                    field={{ value: currentItem, error: '' }}
                    type="textarea"
                    id="backgroundInfo"
                    name="backgroundInfo"
                    label="Background Info"
                    onChange={onFieldUpdate}
                    disabled={formLoading}
                />
                <div className="icons">
                    <IconButton
                        onClick={onSubmitClick}
                        disabled={currentItem == ''}>
                        <AddCircle className="submit" />
                    </IconButton>
                    <IconButton onClick={onWipe} disabled={currentItem == ''}>
                        <Delete className="wipe" />
                    </IconButton>
                </div>
            </div>
            {backgroundInfo?.length ? (
                <ul className="items">
                    {backgroundInfo.map((p: string, index: number) => (
                        <li key={index}>
                            <p>{p}</p>
                            <div className="icons">
                                <IconButton
                                    onClick={() => onEditClick(index, p)}>
                                    <Edit className="edit" />
                                </IconButton>
                                <IconButton
                                    onClick={() => onDeleteClick(index)}>
                                    <RemoveCircle className="delete" />
                                </IconButton>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li>No current background paragraphs</li>
                </ul>
            )}
        </StyledBackgroundInfoBlock>
    )
}

export default BackgroundInfoBlock
