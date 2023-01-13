import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import './App.css'; 
import Home from './pages/Home';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
    return(
        <Box width="400" sx={{width: {xl: '1488px' }}} m="auto">
            <Navbar />
            
                
                <Home />
                <ExerciseDetail />            
            <Footer/>
            
        </Box>
    )
}
export default App;    