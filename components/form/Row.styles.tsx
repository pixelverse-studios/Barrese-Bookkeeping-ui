import styled from '@emotion/styled'

const FormRow = styled.div`
    display: flex;
    gap: 1rem;

    & > * {
        flex: 1;
    }

    @media screen and (max-width: 850px) {
        flex-direction: column;
    }
`

export default FormRow
