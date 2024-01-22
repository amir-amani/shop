import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


//context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

//componenets
import Landing from './components/Landing';
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Navbar from './shared/Navbar';
import ShopCart from './components/ShopCart';
import Login from './components/Login';
import Footer from './shared/Footer';

//navbar container
import styled from 'styled-components';
const NavbarContainer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
`

const App = () => {
  return(
    <ProductsContextProvider>
      <CartContextProvider>

        <NavbarContainer>
          <Navbar />
        </NavbarContainer>

        <Routes>
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/products' element={<Store />}/>
          <Route path='/cart' element={<ShopCart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>

        <Footer />

      </CartContextProvider>
    </ProductsContextProvider>
  )
}

export default App;