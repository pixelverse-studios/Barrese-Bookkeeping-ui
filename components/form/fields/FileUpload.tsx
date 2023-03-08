import { useEffect, useState } from 'react'
import { Delete, CloudUpload, Edit } from '@mui/icons-material'
import { Skeleton } from '@mui/material'

import { InlineLoader } from '@/components/loader'
import { convertFileToBase64 } from '@/utilities/fileConversion'
import { StyledFileUpload } from './Formfield.styles'

interface FieldProps {
    id: string
    name: string
    onUpload: Function
    loading: boolean
    value: string
    clearValue?: Function
}

interface FileProps {
    lastModified: number
    size: number
    name: string
    type: string
}

const FileUpload = ({
    id,
    name,
    onUpload,
    loading,
    value,
    clearValue
}: FieldProps) => {
    const [file, setFile] = useState<FileProps | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    useEffect(() => {}, [])

    const onFieldUpdate = (e: any) => {
        if (loading) return
        setFile(e.target.files[0])

        const reader = new FileReader()

        reader.onload = function (e: any) {
            setPreview(e.target.result)
        }

        reader.readAsDataURL(e.target.files[0])
    }

    const onUploadClick = async () => {
        if (loading) return
        const base64 = await convertFileToBase64(file)

        const success = await onUpload({ base64, filename: file?.name })
        if (success) {
            setFile(null)
        }
    }

    const onDeleteClick = () => {
        if (loading) return
        setFile(null)
        setPreview(null)

        if (clearValue) clearValue()
    }

    return (
        <StyledFileUpload>
            {preview || value ? (
                <img src={preview || value} alt="current-img-value" />
            ) : (
                <Skeleton className="skelly" variant="circular" />
            )}
            <input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/svg"
                onChange={onFieldUpdate}
                id={id}
                name={name}
            />
            {file != null ? (
                <>
                    <span className="fileName">{file.name}</span>
                    {loading ? (
                        <InlineLoader />
                    ) : (
                        <div className="actionButtons">
                            <CloudUpload
                                className="upload"
                                onClick={onUploadClick}
                            />
                            <Delete
                                className="delete"
                                onClick={onDeleteClick}
                            />
                        </div>
                    )}
                </>
            ) : null}
            <label htmlFor={id}>
                <Edit />
            </label>
        </StyledFileUpload>
    )
}

export default FileUpload
