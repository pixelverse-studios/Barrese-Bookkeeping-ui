import { useRouter } from 'next/router'
import StyledButton from './Button.styles'
type ButtonProps = {
    label: string
    route: string
}
const Button = ({ label, route }: ButtonProps) => {
    const router = useRouter()

    return (
        <StyledButton
            onClick={() => {
                router.push(`${route}`)
            }}>
            {label}
        </StyledButton>
    )
}

export default Button
