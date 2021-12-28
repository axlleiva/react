import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/itemCount';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Bienvenido , compra pokemons para tus batallas' />
    <ItemCount min ={1} max={10} />
    </div>
  );
}

export default App;
