import styled from '@emotion/styled'

const StyledButton = styled.button`
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: var(--Secondary-accent-color);
    border: 2px solid var(--Primary-brand-color);
    border-radius: 5px;
    color: var(--Primary-brand-color);
    font-weight: 800;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: var(--Primary-accent-color);
        border: 2px solid var(--Primary-accent-color);
        border-radius: 5px;
        color: var(--Primary-brand-color);
        font-weight: 800;
    }
`

export default StyledButton
