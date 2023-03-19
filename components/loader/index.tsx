import { CircularProgress } from '@mui/material'
import GearsLoader from './GearsLoader'
import { StyledFullPageLoader, StyledPartialLoader } from './Loader.styles'

const InlineLoader = () => {
    return <CircularProgress size={18} />
}

const FullPageLoader = () => (
    <StyledFullPageLoader>
        <GearsLoader />
    </StyledFullPageLoader>
)

const PartialLoader = () => (
    <StyledPartialLoader>
        <GearsLoader />
    </StyledPartialLoader>
)

export { InlineLoader, FullPageLoader, PartialLoader }
