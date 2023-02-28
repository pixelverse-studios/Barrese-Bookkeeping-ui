import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { logout } from '@/lib/redux/slices/user'

const useLogout = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = () => {
        logout(dispatch, router)
    }

    return handleLogout
}

export default useLogout
