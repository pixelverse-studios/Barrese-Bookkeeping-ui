import StyledButton from './Button.styles'
type ButtonProps = {
    label: string
}
const Button = ({ label }: ButtonProps) => {
    return <StyledButton>{label}</StyledButton>
}

export default Button
