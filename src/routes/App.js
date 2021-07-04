import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../container/Home'
import Login from '../container/Login'

const App = () => (
    <BrowserRouter>
      <Route exact="/" component={Home} />
      <Route exact="/login" component={Login} />
    </BrowserRouter>
)

export default App;