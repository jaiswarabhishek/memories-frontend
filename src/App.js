import React,{useEffect,useState} from 'react';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { redirect } from 'react-router-dom';



function App() {
 
  const user = JSON.parse(localStorage.getItem('profile'));

  
 
  return (

  <Router>
      <Container maxWidth="xl">
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/auth" element={<Auth/>} /> */}

        {
          user ? 
          <Route path="/auth" element={<Navigate to="/" />} />
          : 
          <Route path="/auth" element={<Auth/>} />
        }
 

      </Routes>

    
    </Container>

    </Router>

  );
}

export default App;
