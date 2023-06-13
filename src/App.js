import React from 'react';
import './App.css';
import SignUp from './component/signup';
import Forgot from './component/forgot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBr4EgOQlmZiV3evHmbNyKmxlUYjX-qWfQ",
    authDomain: "marks-sheet-b7dff.firebaseapp.com",
    projectId: "marks-sheet-b7dff",
    storageBucket: "marks-sheet-b7dff.appspot.com",
    messagingSenderId: "831728571428",
    appId: "1:831728571428:web:6639b399652fc9006334b1",
    measurementId: "G-S4C0H42VYK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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