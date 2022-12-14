import { Container, Grid } from '@material-ui/core';
import React from 'react';

import Profile from './Components/Profile/Index'
import Header from './Components/Header/Index'
import Footer from './Components/Footer/Index'
import Portfolio from './Pages/Portfolio/Index'
import Resume from './Pages/Resume/Index'
import Contact from './Components/Contact/Index';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
  
    <Container className={'top_60'}>
      <Grid container spacing={4}>

        {/* //First Components */}

        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>



        {/* //Second Components */}

        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content container_shadaw'>
            <Routes>
               <Route path ="/Portfolio" element={<Portfolio/>} />
               <Route path="/contact" element={<Contact />} />
               <Route path ="/" element={<Resume/>} />
            </Routes>
            </div>
          </Router>
         <Footer />
        </Grid>
      </Grid>
    </Container>




  );
}

export default App;
