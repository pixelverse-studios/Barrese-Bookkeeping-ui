import { StyledFooter } from './Footer.styles'
import Logo from '../../assets/images/BarreseBookkeeping.svg'
import { Instagram, Facebook, Twitter } from '@mui/icons-material/'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-content">
                <img src={Logo.src} alt="" />
                <div className="contact">
                    <ul>
                        <li>Business Name</li>
                        <li>Address Line 1</li>
                        <li>Address Line 2</li>
                        <li>Phone Number</li>
                    </ul>
                    <div className="social-links">
                        <Instagram />
                        <Facebook />
                        <Twitter />
                    </div>
                    <span className="copyright">Copyright &copy;</span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer
