import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data.js'

const Navbar = () => {
    return (
        <NavBar>
            <NavBarWrapper>
                {
                    navData.map(data => (
                        <Container>
                            <img src={data.url} alt="img" style={{ width: 64 }} />
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </NavBarWrapper>
        </NavBar>
    )
}


const NavBar = styled(Box)`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
    padding: 0 0 10px 0;
`;
const NavBarWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: '0 5%',
    justifyContent: 'space-between',
    overflow: 'overlay',
    scrollbarWidth: 'none',
    [theme.breakpoints.down('lg')]: {
    }
}))



const Container = styled(Box)`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled(Typography)`
    font-size: 14px ;
`;


export default Navbar;