// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import image_1 from './assets/images/1.jpg'
import image_2 from './assets/images/2.jpg'
import image_4 from './assets/images/4.jpg'

// import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
      isClose:false
    };
  }
  openNav() {
    this.setState({...this.state,isClose:false});
  }
  
  closeNav() {
    this.setState({...this.state,isClose:true});
    
  }
  render(){ 
    return (
      <div className="App">
        <nav>
          <ul className="topnav">
            <li className="left">












              
              <img className='logo' src='./logo4.png'></img>
            </li>
            <li className='n'><a href="#contact">Contact</a></li> 
            <li className='n'><a href="#about">About</a></li>
            <li className='n'><a href="#news">Services</a></li>
            <li className='n'><a href="#home">Home</a></li>
            <li className="right">
              <button id="openbtn" onClick={() => this.openNav()}>&#9776;</button>
            </li>
            dsfdsfdsfsd
            dsfdsfdsfsdf
            dsfdsfdsfsdf
          </ul>
          <div id="Sidenav" className={this.state.isClose?'sidenav hidden':'sidenav'}>
            <a href="#" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </nav>





        <div className='flex column minH-200 p-10'>
          <div className='w-100 minH-50 pt-50'>
            <img src={image_1} alt='' />  
          </div>
        
          <div className='flex w-100 justify-content-center' id="twoimg">
            <img className='img2' src={image_2} alt='img2' />
            <img className='img4' src={image_4} alt='img4' />
          </div>
        </div>

        <div id='footer'>
          
        </div>

        <div className={this.state.isClose?'hover-drop hidden':'hover-drop'}  onClick={this.closeNav()}>

        </div>
      </div>
    );
  }
  
}

export default App;
