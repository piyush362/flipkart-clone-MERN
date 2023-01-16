import { Box, styled } from "@mui/material"
import Slide from "./Slide";

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/d6f827f6b3f87db8.jpg?q=70';
    return (
        <Container>
            <Left >
                <Slide products={products} title={title} timer={timer} />
            </Left>
            <AdBox>
                <img src={adURL} alt="ad" style={{ width: 230 }} />
            </AdBox>
        </Container>
    )
}

const Container = styled(Box)`
    display: flex ;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`;

const Left = styled(Box)(({ theme }) => ({
    width: '78%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const AdBox = styled(Box)(({ theme }) => ({
    background: '#fff',
    padding: 5,
    width: '20%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))


export default MidSlide;