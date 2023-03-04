import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'
import axios from 'axios'
import { Skeleton } from '@mui/material'

import { EDIT_ABOUT } from '@/lib/gql/mutations/cms'
import { setCmsData } from '@/lib/redux/slices/cms'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import { FileUpload } from '@/components/form'
import {
    createCloudinaryFormData,
    CloudinaryCreationProps
} from '@/utilities/fileConversion'
import { CLOUDINARY } from '@/utilities/constants'
import {
    StyledUserProfile,
    StyledProfileCard,
    StyledProfileInfo
} from './StyledUserProfile.styles'

const UserProfile = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const {
        about: { profilePic },
        _id
    } = useSelector((state: any) => state?.cmsData?.cms)
    const {
        profile: { email, firstName, lastName }
    } = useSelector((state: any) => state?.user)

    const [editAbout] = useMutation(EDIT_ABOUT, {
        onCompleted({ editAbout: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(setCmsData(data))
                dispatch(
                    showBanner({
                        message: 'Your profile picture has been updated.',
                        type: data.__typename
                    })
                )
            }

            setLoading(false)
        },
        onError(err: any) {
            setLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        }
    })

    const onProfilePicUpload = async ({
        base64,
        filename
    }: CloudinaryCreationProps) => {
        setLoading(true)
        try {
            const form = createCloudinaryFormData({
                base64,
                filename,
                context: 'about-profilePic'
            })
            const res = await axios.post(CLOUDINARY.UPLOAD_URL, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            editAbout({
                variables: {
                    cmsId: _id,
                    input: {
                        profilePic: `${CLOUDINARY.PUBLIC_URL}/${res.data.public_id}`
                    }
                }
            })
            return true
        } catch (error) {
            console.log(error)
            setLoading(false)
            dispatch(
                showBanner({
                    type: 'Errors',
                    message:
                        'There was an issue uploading your image. Please try again'
                })
            )
            return false
        }
    }

    return (
        <StyledUserProfile>
            <div className="userInfo">
                <StyledProfileCard>
                    {loading ? (
                        <Skeleton className="skelly" variant="circular" />
                    ) : (
                        <img src={profilePic} alt="profile-pic" />
                    )}
                    <div className="info">
                        <h4>{email}</h4>
                        <span>
                            {firstName} {lastName}
                        </span>
                    </div>
                    <div className="cardFooter">
                        <FileUpload
                            loading={loading}
                            label="Upload Picture"
                            name="profilePic"
                            id="profilePic"
                            onUpload={onProfilePicUpload}
                        />
                    </div>
                </StyledProfileCard>
                <StyledProfileInfo>password edit form</StyledProfileInfo>
            </div>
        </StyledUserProfile>
    )
}

export default UserProfile
