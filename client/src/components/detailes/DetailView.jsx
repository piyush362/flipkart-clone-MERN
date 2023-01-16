import { Box, Typography, styled, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsAction";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const DetailView = () => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails)

    useEffect(() => {
        if (product && id != product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

    return (
        <Components>
            {
                loading && product && Object.keys(product).length &&
                <Container>
                    <Box>
                        <ActionItem product={product} />
                    </Box>
                    <RightContainer>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }
        </Components>
    )
}

const Components = styled(Box)`
    background: #f2f2f2 ;
    margin-top: 55px;
    width: 100%;
`;

const Container = styled(Box)`
    background: #fff ;
    display: flex;
`;

const RightContainer = styled(Box)`
    margin-left: 10px;
    width: 100%;
    padding: 40px;
`;
export default DetailView;