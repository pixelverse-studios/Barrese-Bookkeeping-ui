import StyledButton from './Button.styles'
type ButtonProps = {
    value: string | number
}
const Button = ({ value }: ButtonProps) => {
    return <StyledButton>{value}</StyledButton>
}

export default Button
