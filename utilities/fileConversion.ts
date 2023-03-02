import { format } from 'date-fns'
import { CLOUDINARY } from './constants'

const { PRESET, OVERRIDE_KEY } = CLOUDINARY

export const convertFileToBase64 = (file: any) => {
    const base64 = new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => {
            const result = reader.result
            resolve(result)
        }
        reader.readAsDataURL(file)
    }).then(res => res as string)

    return base64
}

export interface CloudinaryCreationProps {
    base64: string
    filename: string
    context: string
}
export const createCloudinaryFormData = ({
    base64,
    filename,
    context
}: CloudinaryCreationProps) => {
    const form = new FormData()
    form.append('file', base64)

    const today = format(new Date(), 'MM/dd/yyyy')
    const newFileName = `${filename}-${context}_${today}`
    form.append(OVERRIDE_KEY, newFileName)
    form.append('upload_preset', PRESET)

    return form
}
