import styled from '@emotion/styled'

export const StyledGearsLoader = styled.div`
    height: 100%;
    position: relative;
    animation: start 2s forwards;

    @keyframes start {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .gears {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        animation: scale 5s infinite alternate;

        @keyframes scale {
            from {
                transform: scale(0.3) rotate(20deg);
            }
            to {
                transform: scale(0.4) rotate(-20deg);
            }
        }
    }

    .live-loader {
        height: 150px;
        width: 150px;
        min-width: 150px;
        min-height: 150px;
        margin-left: 20px;
    }

    .live-loader:nth-of-type(1) {
        animation: spin 4s ease-in-out infinite;
        .gear {
            opacity: 0.4;
        }
    }

    .live-loader:nth-of-type(2) {
        animation: reverseSpin 4s ease-in-out infinite;
        .gear {
            opacity: 1;
        }
    }
    .live-loader:nth-of-type(3) {
        animation: spin 4s ease-in-out infinite;
        .gear {
            opacity: 0.5;
        }
    }

    .gear {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #607d8b;
        border-radius: 100%;

        .core {
            margin: auto;
            width: 50%;
            height: 50%;
            border-radius: 100%;
            border: 14px solid #263238;
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .tooth {
            background-color: #607d8b;
            position: absolute;
            top: 40%;
            left: -13%;
            width: 125%;
            height: 30px;
            border-radius: 10px;
        }

        .tooth:nth-of-type(2) {
            transform: rotate(45deg);
        }

        .tooth:nth-of-type(3) {
            transform: rotate(90deg);
        }

        .tooth:nth-of-type(4) {
            transform: rotate(135deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }

    @keyframes reverseSpin {
        0% {
            transform: rotate(-23deg);
        }
        100% {
            transform: rotate(-203deg);
        }
    }
`

export const StyledFullPageLoader = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.85);
    height: 100%;
    width: 100%;
`

export const StyledPartialLoader = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 25vh;
    width: 25vw;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.85);
    border-radius: 1.5rem;
    transition: 3s ease-in-out;
`
