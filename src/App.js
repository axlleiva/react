import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Bienvenido , compra pokemons para tus batallas' />
    </div>
  );
}

export default App;
