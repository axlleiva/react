import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/context/cartContext';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        
        <NavBar/>
        
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Bienvenido , compra pokemons para tus batallas' />} />
          <Route exact path='/precio/:precioId' element={<ItemCount min ={1} max={10} />} />
          <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
        </Routes>
        
      
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
