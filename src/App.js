import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Routes,
	Route,
  
} from "react-router-dom";
import SingleFileUpload from './Components/SingleFileUpload';
import Ideas from './Components/Ideas';



function App() {

  return (
    <div className='App'>
       <Ideas/>
        <Routes>
          <Route path="/Fileupload" element={<SingleFileUpload/>}/>
        </Routes>
      
    </div>
      
  );
}

export default App;
