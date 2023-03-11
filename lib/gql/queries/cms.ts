import gql from 'graphql-tag'

export const GET_INITIAL_CMS = gql`
    query getAllCmsContent {
        getAllCmsContent {
            ... on CmsFields {
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
                _id
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
                about {
                    profilePic
                    backgroundInfo
                    role
                    title
                    header
                    subHeader
                    heroImage
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
