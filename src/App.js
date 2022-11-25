import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

function App(){
  return( 
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la web de Pantuflas Pear!"/>
    </div>
  );
}

export default App;
