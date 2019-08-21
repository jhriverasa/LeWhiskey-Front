import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigationbar-styles.css';

import { Link } from "react-router-dom";


class NavigationBar extends Component {
    render(){
        return (

          <div>
            <Navbar variant="dark">
              <Navbar.Brand >LeWhiskey Facturas</Navbar.Brand>
              <Nav className="mr-auto">
              <li><Link className="NavLink" to="/home">Inicio</Link></li>
              <li><Link className="NavLink" to="/invoice">Facturas</Link></li>

              </Nav>
            </Navbar>
          </div>

        );
    }
}

export default NavigationBar;