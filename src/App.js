import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ideas from './Components/Ideas';
import SingleFileUpload from './Components/SingleFileUpload'
import { Link } from "react-router-dom";
function App() {
  return (
    <div className='App'>
        <Ideas/>
        <Routes>
          <Route path='/Ideas' element={<Ideas/>}/>
          <Route path='/FileUpload' element={<SingleFileUpload/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
