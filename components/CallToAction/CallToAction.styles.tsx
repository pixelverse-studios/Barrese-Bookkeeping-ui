import styled from '@emotion/styled'

export const StyledCTASection = styled.section`
    width: 100%;
    padding: 90px 30px;
    position: relative;
    .imageHolder {
        width: 100%;
        position: absolute;
        top: 15px;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 1;
        display: grid;
        place-items: center;
        img {
            outline: 15px solid white;
            border-radius: 50%;
        }
    }
    .content {
        position: relative;
        border: 3px solid black;
        width: 100%;
        padding: 90px 15px;
        display: grid;
        place-items: center;

        h1 {
            font-size: 60px;
        }
        div {
            display: grid;
            place-items: center;
            .subText {
                font-size: 20px;
            }
        }
    }

    .buttonHolder {
        width: 100%;
        position: absolute;
        bottom: 65px;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 1;
        display: grid;
        place-items: center;
        button {
            outline: 20px solid white;
            padding: 1rem 2rem;
        }
    }
`
