import React from 'react';
import './styles/App.css';
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import { About } from './pages/About';
import Posts from './pages/Posts';
import { NavBar } from './components/UI/NavBar/NavBar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';


function App() {
    return (
        <BrowserRouter>
          <NavBar/>          
          <AppRouter/>
        </BrowserRouter>
    )    
  
}

export default App;
