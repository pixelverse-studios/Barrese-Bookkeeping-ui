import { useSelector } from 'react-redux'
import { LocationOn } from '@mui/icons-material'

import { footerOptions } from '../views/dashboard/footer/FooterField'
import Logo from '../../assets/images/BarreseBookkeeping.svg'
import { StyledFooter } from './Footer.styles'

const Footer = () => {
    const { contactLinks } = useSelector((state: any) => state.footer)
    const today = new Date()
    const currentYear = today.getFullYear()

    return (
        <StyledFooter>
            <div className="footer-content">
                <div className="logoContainer">
                    <img src={Logo.src} alt="" />
                </div>
                <div className="contact">
                    <h3>CONTACT</h3>
                    <span>Barrese Bookkeeping</span>
                    <span>Northern New Jersey</span>
                    <div className="social-links">
                        {contactLinks?.map((item: any) => {
                            const currentIcon = footerOptions.find(
                                option => option.value === item.title
                            )
                            const icon = currentIcon?.icon

                            if (item?.title === 'Email') {
                                return (
                                    <a href={`mailto:${item.link}`}>{icon}</a>
                                )
                            }

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
                    <span className="copyright">
                        Copyright &copy; {currentYear} Barrese Bookkeeping LLC
                    </span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer
