import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'

import { EDIT_ABOUT } from '@/lib/gql/mutations/cms'
import { setAbout } from '@/lib/redux/slices/exports'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '@/lib/redux/slices/banner'
import { FileUpload } from '@/components/form'
import {
    CloudinaryCreationProps,
    onImageUpload
} from '@/utilities/fileConversion'
import PasswordResetForm from './PasswordResetForm'
import {
    StyledUserProfile,
    StyledProfileCard
} from './StyledUserProfile.styles'

const UserProfile = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { id } = useSelector((state: any) => state?.cms)
    const { profilePic } = useSelector((state: any) => state.about)
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
                const newAboutData = { ...data.about }
                delete newAboutData.__typename

                dispatch(setAbout(newAboutData))
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
            const profilePic = await onImageUpload({
                context: 'about-profilePic',
                base64,
                filename
            })

            editAbout({
                variables: {
                    cmsId: id,
                    input: {
                        profilePic
                    }
                }
            })
            return true
        } catch (error) {
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
                    <div>
                        <FileUpload
                            loading={loading}
                            name="profilePic"
                            id="profilePic"
                            onUpload={onProfilePicUpload}
                            value={profilePic}
                        />
                    </div>
                    <div className="info">
                        <h4>{email}</h4>
                        <span>
                            {firstName} {lastName}
                        </span>
                    </div>
                </StyledProfileCard>
                <PasswordResetForm />
            </div>
        </StyledUserProfile>
    )
}

export default UserProfile
