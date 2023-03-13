import styled from '@emotion/styled'

export const ButtonRow = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    button {
        height: 2rem;
        width: 10rem;
    }
`

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
