import styled from '@emotion/styled'

export const StyledFileUpload = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    label {
        cursor: pointer;
        z-index: 2;
    }

    .fileName {
        line-height: 24px;
        font-size: 0.9rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 70%;
        padding-top: 3px;
    }

    svg {
        z-index: 3;
        cursor: pointer;

        &.upload:hover {
            color: var(--success-font);
        }

        &.delete:hover {
            color: var(--error-font);
        }
    }
`
