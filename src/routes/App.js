import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../container/Home'

const App = () => (
    <BrowserRouter>
      <Route exact="/" component={Home} />
    </BrowserRouter>
)

export default App;