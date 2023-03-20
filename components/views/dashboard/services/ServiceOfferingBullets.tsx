import { useState } from 'react'
import {
    List,
    ListSubheader,
    ListItem,
    ListItemText,
    TextField,
    IconButton
} from '@mui/material'
import { CheckBox, RemoveCircle } from '@mui/icons-material'

import { StyledOfferingBullet } from './StyledServicesWidget'

interface ServiceOfferingBulletsProps {
    bullets: string[]
    updateBullets: Function
}

const ServiceOfferingBullets = ({
    bullets,
    updateBullets
}: ServiceOfferingBulletsProps) => {
    const [bullet, setBullet] = useState<string>('')

    const handleBulletChange = (e: any) => setBullet(e.target.value)
    const handleBulletSubmit = () => {
        updateBullets([...bullets, bullet])
        setBullet('')
    }
    const handleRemoveBullet = (index: number) => {
        const bulletsCopy = [...bullets]
        bulletsCopy.splice(index, 1)
        updateBullets(bulletsCopy)
    }

    return (
        <StyledOfferingBullet>
            <List
                subheader={
                    <ListSubheader>Offering Bullet Points</ListSubheader>
                }>
                <ListItem className="newBulletRow">
                    <TextField
                        id="newBullet"
                        name="newBullet"
                        variant="filled"
                        type="text"
                        onChange={handleBulletChange}
                        value={bullet}
                        label="New Bullet"
                    />
                    <IconButton onClick={handleBulletSubmit} disabled={!bullet}>
                        <CheckBox />
                    </IconButton>
                </ListItem>
                <div className="bulletsContainer">
                    {bullets?.map((item, index) => (
                        <ListItem>
                            <ListItemText>{item}</ListItemText>
                            <IconButton
                                onClick={() => handleRemoveBullet(index)}>
                                <RemoveCircle />
                            </IconButton>
                        </ListItem>
                    ))}
                </div>
            </List>
        </StyledOfferingBullet>
    )
}

export default ServiceOfferingBullets
