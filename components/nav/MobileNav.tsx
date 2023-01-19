import { useEffect, useState } from 'react'
import { StyledMobileNav } from './Nav.styles'
import Link from 'next/link'

// import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MobileRoutes } from './routes'
const MobileNav = () => {
    const [show, setShow] = useState<boolean>(false)
    const [stopScroll, setStopScroll] = useState<boolean>(false)
    const menuToggle = () => {
        setShow(!show)
        setStopScroll(!stopScroll)
    }

    useEffect(() => {
        if (stopScroll === true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [stopScroll])

    return (
        <StyledMobileNav>
            <div className={show === true ? 'header menuOpened' : 'header'}>
                <div className="burgerContainer" onClick={menuToggle}>
                    <div className="burger">
                        <div className="bar topBar"></div>
                        <div className="bar btmBar"></div>
                    </div>
                </div>
                <div className="icon iconApple">Barrese Bookkeeping</div>
                <ul
                    className="menu"
                    style={{ display: `${show === true ? 'block' : 'none'}` }}>
                    {MobileRoutes.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="menuItem"
                                onClick={menuToggle}>
                                <Link href={item.path} legacyBehavior>
                                    <a>{item.label}</a>
                                </Link>
                            </li>
                        )
                    })}
                    {/* <li className={styles.socialLinks}>
                        <Link href="https://www.instagram.com/_evanyu/">
                            <a>
                                <BsInstagram className='socialIcons' />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/eyu914/">
                            <a>
                                <BsLinkedin className='socialIcons' />
                            </a>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </StyledMobileNav>
    )
}
export default MobileNav