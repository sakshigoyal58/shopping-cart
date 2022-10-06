import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import About  from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import { Container } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import { ShoppingCartContextProvider } from './Context/ShoppingCartContext';

const App : React.FC = () =>
{
  return(
    <React.Fragment>
      <ShoppingCartContextProvider >
      <NavigationBar/>
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/Store' element = {<Store/>}/>
          <Route path='/About' element= {<About/>}/>
        </Routes>
       </Container>
      </ShoppingCartContextProvider>      
    </React.Fragment>
   
  );
}

export default App;
