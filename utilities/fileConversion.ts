import axios from 'axios'
import { format } from 'date-fns'

import { CLOUDINARY } from './constants'

const { PRESET, OVERRIDE_KEY, PUBLIC_URL } = CLOUDINARY

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

export const onImageUpload = async ({
    context,
    base64,
    filename
}: CloudinaryCreationProps) => {
    try {
        const form = createCloudinaryFormData({
            base64,
            filename,
            context
        })
        const res = await axios.post(CLOUDINARY.UPLOAD_URL, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return `${CLOUDINARY.PUBLIC_URL}/${res.data.public_id}`
    } catch (error) {
        throw error
    }
}
