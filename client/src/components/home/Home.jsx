import { useEffect } from 'react';
import { Box, styled } from '@mui/material'

// components
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import { getProducts } from '../../redux/actions/productsAction'
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {
    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Container>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title='Discount for you' timer={false} />
                <Slide products={products} title="Suggesting items" timer={false} />
                <Slide products={products} title="Top selections" timer={false} />
                <Slide products={products} title="Recommended items" timer={false} />
                <Slide products={products} title="Trending offers" timer={false} />
                <Slide products={products} title="Season's Top picks" timer={false} />
                <Slide products={products} title="Top deals on accesssories" timer={false} />
            </Container>

        </>
    )
}

const Container = styled(Box)`
    padding: 10px 10px ;
    background-color: #f2f2f2;
`;

export default Home;