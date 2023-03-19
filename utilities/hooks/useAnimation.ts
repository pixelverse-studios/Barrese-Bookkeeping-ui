import { useEffect, useState } from 'react'

interface AnimationProps {
    show: boolean
    entranceName: string
    exitName: string
    duration: number
    exitTime: number
}

const useAnimation = ({
    show,
    entranceName,
    exitName,
    duration,
    exitTime
}: AnimationProps) => {
    const [animation, setAnimation] = useState<string>('')

    useEffect(() => {
        if (show) {
            setAnimation(entranceName)
        }

        if (!show) {
            setAnimation(exitName)
            setTimeout(() => setAnimation(''), duration)
        }
    }, [show])

    return { animation }
}

export default useAnimation
