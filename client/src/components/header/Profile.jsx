import { useContext, useState } from "react"
import { Box, Typography } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logout = () => {
        setAccount('')
        alert('Logout confermation... click okay to logout')
    }
    return (
        <>
            <Box style={{ display: 'flex' }}>
                <Typography onClick={handleClick} style=
                    {{ cursor: 'pointer' }}>{account}</Typography>
                <PowerSettingsNewIcon onClick={handleClick} style=
                    {{ cursor: 'pointer', paddingLeft: 10, color: 'yellow' }}></PowerSettingsNewIcon>
            </Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(), logout() }}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default Profile;