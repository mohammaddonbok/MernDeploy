import React, {useState} from 'react';
import './App.css'
import Main from './views/Main';
import Detail from './views/Details'
import Update from './views/Udpate'
import { Router } from '@reach/router';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="api/product/:id"/>
        <Update path="api/product/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;
