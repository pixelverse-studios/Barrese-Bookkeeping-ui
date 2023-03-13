interface baseInputType {
    error: string
}

export interface stringInputType extends baseInputType {
    value: string
}

export interface numberInputType extends baseInputType {
    value: number | null
}
interface validationType {
    test: (value: string) => boolean
    message: string
}

interface RegisterFormProps {
    firstName: stringInputType
    lastName: stringInputType
    email: stringInputType
    password: stringInputType
}

interface RegisterValidationProps {
    [firstName: string]: validationType
    lastName: validationType
    email: validationType
    password: validationType
}

interface LoginFormProps {
    email: stringInputType
    password: stringInputType
}

interface LoginValidationProps {
    [email: string]: validationType
    password: validationType
}

interface ResetPasswordProps {
    newPassword: stringInputType
    confirmPassword: stringInputType
}

interface ResetValidationProps {
    [newPassword: string]: validationType
    confirmPassword: validationType
}

interface ForgotPasswordProps {
    email: stringInputType
}

interface ForgotValidationProps {
    [email: string]: validationType
}

interface CtaFormProps {
    [image: string]: stringInputType
    heading: stringInputType
    description: stringInputType
    buttonLabel: stringInputType
}

interface LandingFormProps {
    [heroImage: string]: stringInputType
    heroBannerH1: stringInputType
    heroBannerH2: stringInputType
    subtext: stringInputType
}

interface FooterProps {
    [contactLinks: string]: stringInputType
}

export type RegisterProps =
    | RegisterValidationProps
    | LoginValidationProps
    | ResetValidationProps
    | ForgotValidationProps

export type FormProps =
    | RegisterFormProps
    | LoginFormProps
    | ResetPasswordProps
    | ForgotPasswordProps
    | CtaFormProps
    | LandingFormProps
    | FooterProps
