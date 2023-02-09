import { useEffect, useState } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { MobileRoutes } from './routes'
import Logo from '../../assets/images/BarreseBookkeeping.svg'

import { StyledMobileNav } from './Nav.styles'

const MobileNav = () => {
    const [show, setShow] = useState<boolean>(false)
    const [stopScroll, setStopScroll] = useState<boolean>(false)
    const router = useRouter()
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
                <div className="logo-container">
                    <img
                        className="logo"
                        src={Logo.src}
                        alt="Barrese Bookkeeping"
                        onClick={() => {
                            router.push('/')
                            setShow(false)
                        }}
                    />
                </div>
                <div className="burgerContainer" onClick={menuToggle}>
                    <div className="burger">
                        <div className="bar topBar"></div>
                        <div className="bar btmBar"></div>
                    </div>
                </div>
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
