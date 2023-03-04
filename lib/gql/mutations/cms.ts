import gql from 'graphql-tag'

export const EDIT_ABOUT = gql`
    mutation editAbout($cmsId: ID!, $input: InputAboutFields) {
        editAbout(cmsID: $cmsId, input: $input) {
            ... on CmsFields {
                _id
                about {
                    profilePic
                    backgroundInfo
                    role
                    title
                    header
                    subHeader
                    heroImage
                }
                landing {
                    heroImage
                    heroBannerH1
                    heroBannerH2
                    subtext
                }
                callToAction {
                    image
                    heading
                    description
                    buttonLabel
                }
                footer {
                    contactLinks {
                        _id
                        icon
                        link
                        title
                    }
                }
                services {
                    pageH1
                    pageH2
                    description
                    heroImage
                    offerings {
                        _id
                        icon
                        title
                        description
                        bullets
                    }
                }
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
                blog {
                    pageH1
                    pageH2
                    heroImage
                    blogs {
                        _id
                        thumbnail
                        image
                        title
                        recap
                        content
                        createdAt
                    }
                }
                dashboard {
                    route
                    label
                }
                newsletter {
                    users {
                        _id
                        email
                        firstName
                        lastName
                        createdAt
                        updatedAt
                        subscribed
                    }
                    records {
                        _id
                        participants {
                            email
                            firstName
                            lastName
                        }
                        emailBody
                        subjectLine
                        sentAt
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
