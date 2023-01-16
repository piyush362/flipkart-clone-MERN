import { useContext, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/DataProvider';

// components
import LoginDialog from '../login/LoginDiaolog';
import Profile from './Profile';

function CustomButooms() {

    const [open, setopen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const openDialog = () => {
        setopen(true)
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginBtn variant="contained" onClick={() => openDialog()}>Login</LoginBtn>
            }
            <Typography style={{ marginLeft: 20, marginRight: 30 }}>Become a Seller</Typography>
            <Typography style={{ marginLeft: 10, marginRight: 30 }}>More</Typography>

            <CartWrapper>
                <ShoppingCartIcon style={{ width: 19, marginRight: 5 }} />
                <Typography>Cart</Typography>
            </CartWrapper>
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>

    )
}

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        // flexDirection: 'column',
        // height: 400,
        // alignItems: 'center'
        display: 'block',
        textAlign: 'center'
    }
}))


const LoginBtn = styled(Button)`
    margin: 0 10px 0 10px;
    background-color: #fff;
    color: #2874f0;
    box-shadow: none;
    padding: 4px 30px;
    border-radius: 2px;
    text-transform: none;
    font-weight: 500;
`;

const CartWrapper = styled(Box)`
    display: flex ;
    margin-left: 10px;
`;

export default CustomButooms;