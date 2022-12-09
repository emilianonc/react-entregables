// Librerías
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de la web
import NavBar from './components/NavBar/NavBar.js';
import Home from "./components/Home/Home.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from "./components/Footer/Footer.js";

function App(){
  return( 
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/productos' element={ <ItemListContainer/> }/>
        <Route exact path='/producto/:producto_id' element={ <ItemDetailContainer/> }/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;

/*<Route exact path='/item/:id' element={ <ItemDetailContainer />}/>*/
