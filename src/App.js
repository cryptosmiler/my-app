// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { a } from 'react-router-dom';
import image_1 from './assets/images/1.jpg'
import image_2 from './assets/images/2.jpg'
import image_4 from './assets/images/4.jpg'

// import $ from 'jquery';

const App = () => {
  console.log('dddd')
  const[isClose,setClose] = useState(true);
  
  const toggle = () => {
    setClose(!isClose)

  }
  return (
    <div className="App">
      <nav>
        <ul className="topnav">
          <li className="left">
            <img className='logo' src='./logo4.png' alt='logo'></img>
          </li>
          <li className='n'><a to="#contact">Contact</a></li> 
          <li className='n'><a to="#about">About</a></li>
          <li className='n'><a to="#news">Services</a></li>
          <li className='n'><a to="#home">Home</a></li>
          <li className="right">
            <button id="openbtn" onClick={() => toggle()}>&#9776;</button>
          </li>
        </ul>
        <div id="Sidenav" className={isClose ?'sidenav hidden':'sidenav'}>
          <a to={'/'} className="closebtn" onClick={() => toggle()}>&times;</a>
          <a to={'/'}>Homes</a>
          <a to={'/'}>Clients</a>
          <a to={'/'}>Contact</a>
        </div>
      </nav>
      <div className='flex column minH-200 p-10'>
        <div className='w-100 minH-50 pt-50'>
          <img src={image_1} alt='img1' />  
        </div>
        <div className='flex w-100 justify-content-center' id="twoimg">
          <img className='img2' src={image_2} alt='img2' />
          <img className='img4' src={image_4} alt='img4' />
        </div>
      </div>

      <div id='footer'>
        
      </div>

      <div className={isClose ? 'hover-drop hidden' : 'hover-drop'}  onClick={() => toggle()}></div>
    </div>
  );
}


export default App;
