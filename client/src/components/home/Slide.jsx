import { Box, Typography, styled, Button, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <Box variand="span">{hours} : {minutes} : {seconds} Left</Box>
        )
    }
    return (
        <Components>
            <Deal>
                <Typography style={{ fontWeight: 600 }}>{title}</Typography>
                {timer && <Timer>
                    <img src={timerURL} alt="timer" width="18px" />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                </Timer>}
                <ViewAllBtn variant="contained">VIEW ALL</ViewAllBtn>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                centerMode={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                dotListClass="custom-dot-list-style"
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }} >
                                <Image src={product.url} alt="img" />
                                <Text style={{ fontWeight: 600 }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.tagline}</Text>
                                <Text style={{ color: '#212121', opacity: '.6' }}>{product.discount}</Text>
                            </Box>
                        </Link>

                    ))
                }

            </Carousel>
        </Components>
    )
}

const Components = styled(Box)`
    margin-top: 10px;
    background-color: #fff;
`;

const Deal = styled(Box)`
    padding: 15px 20px 10px 20px;
    display: flex ;
    align-items: center;
`;

const Timer = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: #7f7f7f;
`;

const ViewAllBtn = styled(Button)`
    margin-left: auto;
    background: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size: 14px ;
    margin-top: 5px;
`;

export default Slide;