import React from 'react'
import './App.css';
import Weather from './components/data.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';



function App() {
  return (
    <div className='app-container'>
        <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
