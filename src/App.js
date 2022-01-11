import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <ItemDetailContainer/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting='Bienvenido , compra pokemons para tus batallas' />} />
        <Route exact path='/detalle' element={<ItemCount min ={1} max={10} />} />

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
