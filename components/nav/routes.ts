interface RouteItem {
    path: string
    label: string
    type: 'link' | 'button'
}

export const NavRoutes: RouteItem[] = [
    {
        path: '/about',
        label: 'About',
        type: 'link'
    },
    {
        path: '/services',
        label: 'Services',
        type: 'link'
    },
    {
        path: '/blog',
        label: 'Blog',
        type: 'link'
    },
    {
        path: '/faqs',
        label: 'FAQs',
        type: 'link'
    },
    {
        path: '/contact',
        label: 'Contact',
        type: 'button'
    }
]

export const AuthNavItems = {
    DASHBOARD: {
        path: '/dashboard',
        label: 'Dashboard'
    },
    LOGOUT: {
        path: '',
        label: 'Logout'
    }
}
