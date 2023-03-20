import styled from '@emotion/styled'

export const ButtonRow = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    button {
        height: 2rem;
        width: 10rem;
    }

    @media screen and (max-width: 1000px) {
        button {
            width: 50%;
        }
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
