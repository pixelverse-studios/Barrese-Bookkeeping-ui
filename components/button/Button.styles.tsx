import styled from '@emotion/styled'

const StyledButton = styled.button`
    padding: 1rem 2rem;
    text-transform: uppercase;
    background-color: var(--Secondary-brand-color);
    border: 2px solid var(--Off-brand-color);
    border-radius: 5px;
    color: var(--Off-brand-color);
    font-weight: 800;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: var(--Primary-accent-color);
        border: 2px solid var(--Primary-accent-color);
        border-radius: 5px;
        color: var(--Primary-brand-color);
        font-weight: 800;
        cursor: pointer;
    }
`

export default StyledButton
