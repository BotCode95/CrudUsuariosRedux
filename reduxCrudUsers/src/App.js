import React from 'react';
import Header from './components/Header';
import ListadoUsuarios from './components/ListadoUsuarios';
import NuevoUsuario from './components/NuevoUsuario';
import EditarUsuario from './components/EditarUsuario'
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom'

//redux
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
   <Router>
    <Provider 
        store={store}>
      <Header/>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={ListadoUsuarios}/>
            <Route exact path="/usuarios/nuevo" component={NuevoUsuario}/>
            <Route exact path="/usuarios/editar/:id" component={EditarUsuario}/>
          </Switch>
        </div>
     </Provider>
   </Router>
  );
}

export default App;
