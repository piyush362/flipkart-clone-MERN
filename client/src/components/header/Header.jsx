import { AppBar, Toolbar, Box, Typography, styled, IconButton, Drawer, List, ListItem } from '@mui/material';
import CustomButooms from './CustomButooms';
import MenuIcon from '@mui/icons-material/Menu';

// components
import { DataContext } from '../../context/DataProvider';

import Search from './Search';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const { account, setAccount } = useContext(DataContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box>
            <List>
                <ListItem button>
                    <CustomButooms />
                </ListItem>
            </List>
        </Box>
    )


    return (
        <Styledheader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Components style={{
                    marginLeft: '12%',
                    lineHeight: 0
                }}>
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                        <img src={logoURL} alt='flipkart logo' style={{
                            width: 75,
                        }} />
                        <Subheading style={{ color: 'white' }}>Explore <Box component='span' style={{ color: '#ffe500' }} >Plus </Box>
                            <img src={subURL} alt="star-logo" style={{ width: 10 }} />
                        </Subheading>
                    </Link>
                </Components>
                <Search />
                <Buttons>
                    <CustomButooms />
                </Buttons>
            </Toolbar>
        </Styledheader>

    )
}
const Styledheader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Components = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const Subheading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const Buttons = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        color: 'inherit'
    }
}))

export default Header;