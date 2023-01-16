import { Box, Button, styled, Grid } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ActionItem = ({ product }) => {
    return (
        <LeftContainer>
            <Image src={product.detailUrl} alt="" />
            <BtnBox>
                <Button variant="contained" style={{ width: '48%', height: 45, backgroundColor: '#FF9F00' }}><ShoppingCartIcon />Add to Cart</Button>
                <Button variant="contained" style={{ width: '48%', height: 45, backgroundColor: '#fb641b' }}><FlashOnIcon />Buy Now</Button>
            </BtnBox>
        </LeftContainer>
    )
}

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
    display: flex;
    flex-direction: column;
`;

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
})

const BtnBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export default ActionItem;