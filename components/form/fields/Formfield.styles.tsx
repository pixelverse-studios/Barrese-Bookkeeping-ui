import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledFileUpload = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;

    img,
    .skelly {
        /* width: 65%; */
        border-radius: 50%;
        margin: auto;
        border: 6px solid #f8f8f8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        height: 13rem;
        object-fit: contain;
    }

    /* .skelly {
        height: 13rem;
    } */

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
        transition: 0.2s ease-in-out;

        &:hover {
            background: #f1f1f1;
            border-color: #d6d6d6;
        }
    }

    .fileName {
        height: 100%;
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
