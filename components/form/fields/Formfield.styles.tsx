import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

interface UploadContainerProps {
    disableCardStyles?: boolean
}
export const StyledUploadContainer = styled.div<UploadContainerProps>`
    ${props => (props.disableCardStyles ? null : CardStyles)}

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20rem;

    h4 {
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        margin: auto;
    }
`

export const StyledFileUpload = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;

    img,
    .skelly {
        border-radius: 50%;
        margin: auto;
        border: 6px solid #f8f8f8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        width: 14rem;
        height: 14rem;
        object-fit: fill;
    }

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
        cursor: pointer;
        position: absolute;
        right: 3rem;
        top: 1rem;
        border-radius: 50%;
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border: 1px solid transparent;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        transition: var(--transition);

        &:hover {
            background: #f1f1f1;
            border-color: #d6d6d6;
        }
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

    .actionButtons {
        display: flex;

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
    }
`
