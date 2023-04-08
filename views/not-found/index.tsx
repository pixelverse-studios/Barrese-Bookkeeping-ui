import { useRouter } from 'next/router'
import { Styled404Page } from './PageNotFound.styles'

const PageNotFound = () => {
    const router = useRouter()
    const goHome = () => router.push('/')
    console.log('123')
    return (
        <Styled404Page>
            <div className="visual">
                <svg
                    id="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="300"
                    viewBox="0 0 220 220">
                    <path
                        fill="#2359a6"
                        stroke="none"
                        d="M47 31C53.1128 43.0948 52 58.6752 52 72L52 145C52 171.12 62.2262 194.568 92 197C83.5992 183.029 85 167.79 85 152L85 78C85 53.7989 74.7959 31.5921 47 31z"
                    />
                    <path
                        fill="#0a98dc"
                        stroke="none"
                        d="M112 32C127.383 45.9333 131.269 68.6822 123.373 88C120.673 94.6085 113.551 98.8438 113 106C144.657 115.382 143.647 184.979 114 196L114 197C130.496 197 147.148 195.649 159.96 183.816C177.197 167.895 176.678 132.787 158.961 117.326C147.789 107.576 131.354 105.002 117 105C132.561 99.7305 149.308 98.6582 156.525 81C167.581 53.9484 140.355 23.6187 112 32z"
                    />
                </svg>
                <div className="loader">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className="message">
                <span>404</span>
                <p>The page you were trying to reach does not exist.</p>
                <button onClick={goHome}>GO HOME</button>
            </div>
        </Styled404Page>
    )
}

export default PageNotFound
