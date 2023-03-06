import gql from 'graphql-tag'

export const EDIT_ABOUT = gql`
    mutation editAbout($cmsId: ID!, $input: InputAboutFields) {
        editAbout(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                about {
                    profilePic
                    backgroundInfo
                    role
                    title
                    header
                    subHeader
                    heroImage
                }
            }
            ... on Errors {
                type
                message
                errors {
                    field
                    message
                }
            }
        }
    }
`
