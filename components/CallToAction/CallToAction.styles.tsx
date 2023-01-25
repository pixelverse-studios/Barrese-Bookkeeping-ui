import styled from '@emotion/styled'

export const StyledCallToAction = styled.section`
    padding: 90px 30px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        position: absolute;
        top: 15px;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 1;
        outline: 15px solid white;
        border-radius: 50%;
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

        .subText {
            display: grid;
            place-items: center;
            font-size: 20px;
        }
    }

    button {
        width: 10rem;
        position: absolute;
        bottom: 65px;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 1;
        outline: 20px solid white;
        padding: 1rem 2rem;
    }
`
