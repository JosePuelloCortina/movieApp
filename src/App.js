import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Rutas from './components/Rutas'
import  CrearMovie  from './components/CrearMovie';
import DetalleRutas from './components/DetalleRutas';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Route path ="/" component={Nav}></Route>
          <Route exact path ="/" component={Home}></Route>
          <Route exact path ="/rutas" component={Rutas}></Route>
          <Route exact path ="/rutas/:id" component={DetalleRutas}></Route>
          <Route exact path="/crear/rutas" component={CrearMovie}></Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
