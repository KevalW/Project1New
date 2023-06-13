import React from 'react';
import './App.css';
import SignUp from './component/signup';
import Forgot from './component/forgot';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;