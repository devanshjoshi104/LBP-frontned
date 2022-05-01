import React, { Component } from 'react';
import './navswitch.css'
import {  Link } from "react-router-dom";

class Navbarswitch extends Component {

  render() {
    return (

      <div className='container'>
      <div className='options d-flex justify-content-around'>
         <Link to = "/"  className='button active btn'>Equipments</Link>
         < Link to = "/" className='button btn'>Requests</Link>
         < Link to = "/" className='button btn'>Transaction history</Link>
      </div>

  </div>
    );
  }
}

export default Navbarswitch;
