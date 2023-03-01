import { useSelector } from 'react-redux'

import {
    StyledUserProfile,
    StyledProfileCard,
    StyledProfileInfo
} from './StyledUserProfile.styles'

const UserProfile = () => {
    const {
        cmsData: {
            cms: {
                about: { profilePic }
            }
        },
        user: {
            profile: { email, firstName, lastName }
        }
    } = useSelector((state: any) => state)

    return (
        <StyledUserProfile>
            <div className="userInfo">
                <StyledProfileCard>
                    <img src={profilePic} alt="profile-pic" />
                    <div className="info">
                        <h4>{email}</h4>
                        <span>
                            {firstName} {lastName}
                        </span>
                    </div>
                    <div className="cardFooter">Upload Picture</div>
                </StyledProfileCard>
                <StyledProfileInfo>password edit form</StyledProfileInfo>
            </div>
        </StyledUserProfile>
    )
}

export default UserProfile
