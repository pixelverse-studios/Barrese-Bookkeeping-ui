import { StyledFooter } from './Footer.styles'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="left-footer">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat atque minima fugiat dignissimos, doloremque
                    repudiandae cupiditate doloribus optio quisquam? Adipisci,
                </p>
            </div>
            <div className="center-footer">
                <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className="right-footer">
                <h1>Contact</h1>
                <ul>
                    <li>Business Name</li>
                    <li>Address Line 1</li>
                    <li>Address Line 2</li>
                    <br />
                    <li>Phone Number</li>
                </ul>
                <br />
                <div className="social-links">
                    <div>Insta</div>
                    <div>FB</div>
                    <div>Twitter</div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer
