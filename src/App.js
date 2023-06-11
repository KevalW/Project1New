import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './component/signup';
import Forgot from './component/forgot';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignUp} />
        <Route path="/forgot" component={Forgot} />
      </div>
    </Router>
  );
}

export default App;