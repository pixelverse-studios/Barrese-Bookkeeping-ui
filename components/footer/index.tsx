import { useSelector } from 'react-redux'

import { footerOptions } from '../views/dashboard/footer/FooterField'
import Logo from '../../assets/images/BarreseBookkeeping.svg'
import { StyledFooter } from './Footer.styles'

const Footer = () => {
    const { contactLinks } = useSelector((state: any) => state.footer)

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
                        {contactLinks?.map((item: any) => {
                            const currentIcon = footerOptions.find(
                                option => option.value === item.title
                            )
                            const icon = currentIcon?.icon
                            return (
                                <a
                                    key={item.link}
                                    href={item?.link}
                                    target="_blank">
                                    {icon}
                                </a>
                            )
                        }) ?? null}
                    </div>
                    <span className="copyright">Copyright &copy;</span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer
