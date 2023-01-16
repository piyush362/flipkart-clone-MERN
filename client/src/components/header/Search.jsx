import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/productsAction'
import { Link } from 'react-router-dom'



const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const getText = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'
                onChange={(e) => getText(e)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link
                                    to={`/product/${product.id}`}
                                    onClick={() => setText('')}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

const SearchContainer = styled(Box)`
    background: #fff;
    width: 30%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 10px;
    padding-right: 2px;
    width: 90%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;  
    align-items: center;
    padding-top: 5px;
`;

const ListWrapper = styled(List)`
    position: absolute;
    top: 50px;
    color: black;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;

export default Search;