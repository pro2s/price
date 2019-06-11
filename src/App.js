import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Table from './components/Table'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/table/:filter?" component={Table}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
