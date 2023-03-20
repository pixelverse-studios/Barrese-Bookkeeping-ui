import styled from '@emotion/styled'

const StyledButton = styled.button`
    padding: 0.625rem 1.25rem;
    text-transform: uppercase;
    background-color: var(--Secondary-brand-color);
    border: 2px solid var(--Off-brand-color);
    border-radius: 5px;
    color: var(--Off-brand-color);
    font-weight: 800;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
        background-color: var(--Primary-accent-color);
        border: 2px solid var(--Primary-brand-color);
        border-radius: 5px;
        color: var(--Primary-brand-color);
        font-weight: 800;
    }
`

export default StyledButton
