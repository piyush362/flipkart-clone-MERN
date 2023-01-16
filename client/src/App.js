// components
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box, styled } from '@mui/material'
import DataProvider from './context/DataProvider';
import DetailView from './components/detailes/DetailView';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 60 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

const HomeWrapper = styled(Box)`
    margin-top: 60px;
`;

export default App;
