import StyledButton from './Button.styles'
type ButtonProps = {
    value: string | number
    route: string
}
const Button = ({ value, route }: ButtonProps) => {
    return <StyledButton>{value}</StyledButton>
}

export default Button
