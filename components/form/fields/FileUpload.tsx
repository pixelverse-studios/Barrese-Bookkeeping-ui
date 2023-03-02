import { useState } from 'react'
import { Delete, CloudUpload } from '@mui/icons-material'

import { InlineLoader } from '@/components/loader'
import { convertFileToBase64 } from '@/utilities/fileConversion'
import { StyledFileUpload } from './Formfield.styles'

interface FieldProps {
    label: string
    id: string
    name: string
    onUpload: Function
    loading: boolean
}

interface FileProps {
    lastModified: number
    size: number
    name: string
    type: string
}

const FileUpload = ({ label, id, name, onUpload, loading }: FieldProps) => {
    const [file, setFile] = useState<FileProps | null>(null)
    const [image, setImage] = useState<string | null>(null)

    const onFieldUpdate = (e: any) => {
        if (loading) return
        setFile(e.target.files[0])
    }

    const onUploadClick = async () => {
        if (loading) return
        const base64 = await convertFileToBase64(file)
        setImage(base64)

        const success = await onUpload({ base64, filename: file?.name })
        if (success) {
            setImage(null)
            setFile(null)
        }
    }

    const onDeleteClick = () => {
        if (loading) return
        setFile(null)
    }

    return (
        <StyledFileUpload>
            <input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/svg"
                onChange={onFieldUpdate}
                id={id}
                name={name}
            />
            {file != null ? (
                <>
                    <label className="fileName" htmlFor={id}>
                        {file.name}
                    </label>
                    {loading ? (
                        <InlineLoader />
                    ) : (
                        <>
                            <CloudUpload
                                className="upload"
                                onClick={onUploadClick}
                            />
                            <Delete
                                className="delete"
                                onClick={onDeleteClick}
                            />
                        </>
                    )}
                </>
            ) : (
                <label htmlFor={id}>{label}</label>
            )}
        </StyledFileUpload>
    )
}

export default FileUpload
