import gql from 'graphql-tag'

export const EDIT_CTA = gql`
    mutation editCallToAction($cmsId: ID!, $input: InputCallToActionFields) {
        editCallToAction(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                callToAction {
                    image
                    heading
                    description
                    buttonLabel
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

export const EDIT_LANDING = gql`
    mutation editLanding($cmsId: ID!, $input: InputLandingFields) {
        editLanding(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                landing {
                    heroImage
                    heroBannerH1
                    heroBannerH2
                    subtext
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

export const EDIT_FOOTER = gql`
    mutation editFooter($cmsId: ID!, $input: InputFooterFields) {
        editFooter(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                footer {
                    contactLinks {
                        icon
                        link
                        title
                    }
                }
            }
        }
    }
`

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
