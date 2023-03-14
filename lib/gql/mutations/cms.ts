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

export const EDIT_FAQ_CONTENT = gql`
    mutation editFaqContent($cmsId: ID!, $input: InputFAQContent) {
        editFaqContent(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                faqs {
                    pageH1
                    pageH2
                    heroImage
                    qAndA {
                        _id
                        question
                        answer
                    }
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

export const EDIT_FAQ_ITEM = gql`
    mutation editFaqItem($faqId: ID!, $cmsId: ID!, $input: InputFAQFields) {
        editFaqItem(faqID: $faqId, cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                faqs {
                    pageH1
                    pageH2
                    heroImage
                    qAndA {
                        _id
                        question
                        answer
                    }
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

export const CREATE_FAQ_ITEM = gql`
    mutation createFaqItem($cmsId: ID!, $input: InputFAQFields) {
        createFaqItem(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                faqs {
                    pageH1
                    pageH2
                    heroImage
                    qAndA {
                        _id
                        question
                        answer
                    }
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
