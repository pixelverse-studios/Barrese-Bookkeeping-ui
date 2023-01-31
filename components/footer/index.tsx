import { StyledFooter } from './Footer.styles'
import Logo from '../../assets/images/BarreseBookkeeping.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-content">
                <img src={Logo.src} alt="" />
                <div className="contact">
                    <h1>Contact</h1>
                    <ul>
                        <li>Business Name</li>
                        <li>Address Line 1</li>
                        <li>Address Line 2</li>
                        <li>Phone Number</li>
                    </ul>
                    <div className="social-links">
                        <div>Insta</div>
                        <div>FB</div>
                        <div>Twitter</div>
                    </div>
                    <span className="copyright">Copyright &copy;</span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer
