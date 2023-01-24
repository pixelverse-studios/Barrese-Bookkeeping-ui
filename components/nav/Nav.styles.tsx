import styled from '@emotion/styled'

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: var(--nav-height);
    background-color: white;
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: rgb(0 0 0 / 12%) 0 1px 3px;
    .navContent {
        display: flex;
        gap: 1rem;
        align-items: center;
        .navRoutes {
            display: flex;
            gap: 1rem;

            display: flex;
            align-items: center;
            column-gap: 1.5rem;

            .navLinks {
                display: inline-block;
                position: relative;

                .socialIcons {
                    font-size: 1.3rem;
                    &:hover {
                        cursor: pointer;
                    }
                }
                a,
                a:hover {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                }
            }

            .navLinks:after {
                content: '';
                display: block;
                margin: auto;
                height: 3px;
                width: 0px;
                background: transparent;
                transition: width 0.5s ease, background-color 0.5s ease;
            }
            .navLinks:hover:after {
                width: 100%;
                background: black;
            }
        }
        li {
            list-style-type: none;
            .activeLink:after {
                content: '';
                display: block;
                margin: auto;
                height: 3px;
                width: 100%;
                background: black;
            }
        }
    }
`

export const TransparantStyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: var(--nav-height);
    background-color: transparent;
    color: black;
    position: fixed;
    top: 0;
    left: 0;

    .navContent {
        display: flex;
        gap: 1rem;
        align-items: center;
        .navRoutes {
            display: flex;
            gap: 1rem;

            display: flex;
            align-items: center;
            column-gap: 1.5rem;

            .navLinks {
                display: inline-block;
                position: relative;

                .socialIcons {
                    font-size: 1.3rem;
                    &:hover {
                        cursor: pointer;
                    }
                }
                a,
                a:hover {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                }
            }

            .navLinks:after {
                content: '';
                display: block;
                margin: auto;
                height: 3px;
                width: 0px;
                background: transparent;
                transition: width 0.5s ease, background-color 0.5s ease;
            }
            .navLinks:hover:after {
                width: 100%;
                background: black;
            }
        }
        li {
            list-style-type: none;
            .activeLink:after {
                content: '';
                display: block;
                margin: auto;
                height: 3px;
                width: 100%;
                background: black;
            }
        }
    }
`

export const StyledMobileNav = styled.nav`
    .header {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        height: 50px;
        width: 100%;
        background: rgba(rgb(255, 255, 255), 0.8);
        overflow: hidden;
        transition: all 0.5s ease-out, background 1s ease-out;
        transition-delay: 0.2s;
        z-index: 1;
        .burgerContainer {
            position: absolute;
            right: 0;
            display: inline-block;
            height: 50px;
            width: 50px;
            cursor: pointer;
            transform: rotate(0deg);
            transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            .burger {
                width: 18px;
                height: 8px;
                position: relative;
                display: block;
                margin: -4px auto 0;
                top: 50%;
                .bar {
                    width: 100%;
                    height: 1px;
                    display: block;
                    position: relative;
                    background: black;
                    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                    transition-delay: 0s;
                    &.topBar {
                        transform: translateY(0px) rotate(0deg);
                    }
                    &.btmBar {
                        transform: translateY(6px) rotate(0deg);
                    }
                }
            }
        }
        .icon {
            display: inline-block;
            position: absolute;
            padding-top: 0.4rem;
            left: 50%;
            transform: translateX(-50%);
            &.iconBag {
                right: 0;
                top: 0;
                left: auto;
                transform: translateX(0px);
                transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                transition-delay: 0.65s;
            }
        }
        ul.menu {
            position: relative;
            padding: 0px 48px 0;
            list-style: none;
            li.menuItem {
                border-bottom: 1px solid #333;
                margin-top: 5px;
                transform: scale(1.15) translateY(-30px);
                opacity: 0;
                transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
                    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                @for $i from 1 through 5 {
                    &:nth-child(#{$i}) {
                        transition-delay: #{0.56 - ($i * 0.07)}s;
                    }
                }
                a {
                    display: block;
                    position: relative;
                    color: #fff;
                    font-family: 'Ek Mukta', sans-serif;
                    font-weight: 100;
                    text-decoration: none;
                    font-size: 22px;
                    line-height: 2.35;
                    font-weight: 200;
                    width: 100%;
                }
            }
        }
        &.menuOpened {
            height: 100%;
            background-color: #000;
            transition: all 0.3s ease-in, background 0.5s ease-in;

            .burgerContainer {
                z-index: 100;
                position: absolute;
                right: 0;
                display: inline-block;
                height: 50px;
                width: 50px;
                color: white;

                transform: rotate(90deg);
                .burger {
                    .bar {
                        transition: all 0.4s
                            cubic-bezier(0.4, 0.01, 0.165, 0.99);
                        transition-delay: 0.2s;
                        background: white;

                        &.topBar {
                            transform: translateY(4px) rotate(45deg);
                        }
                        &.btmBar {
                            transform: translateY(3px) rotate(-45deg);
                        }
                    }
                }
            }
            ul.menu {
                li.menuItem {
                    transform: scale(1) translateY(0px);
                    opacity: 1;
                    @for $i from 1 through $menuItems {
                        &:nth-child(#{$i}) {
                            transition-delay: #{0.07 * $i + 0.2}s;
                        }
                    }
                }
            }
            .icon {
                &.iconBag {
                    transform: translateX(75px);
                    transition-delay: 0.3s;
                }
            }
        }
        .socialLinks {
            padding-top: 2rem;
            display: flex;
            color: white;
            width: 100%;
            column-gap: 2rem;
            font-size: 2rem;
            justify-content: center;
        }
    }
`
