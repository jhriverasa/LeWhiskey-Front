import React, { Component } from 'react';
import './footer-styles.css'

class Footer extends Component{

    
    render(){
        
        return (
            
            <footer>

                <a href = "/"
                 target="_blank" rel="noopener noreferrer"> 
                    <img className="footerBtn"
                        src= "./static/img/contact/facebook-logo.svg"
                        height = "60"
                        width = "50"
                        alt= "Facebook"
                    ></img>
                </a>

                <a href = "/" 
                target="_blank" rel="noopener noreferrer">
                    <img className="footerBtn"
                        src= "./static/img/contact/twitter-logo.svg"
                        height = "60"
                        width = "50"
                        alt= "Twitter"
                    ></img>
                </a>


                <h3> Made from Colombia with ♥ </h3>
            </footer>

            
        
        );
    }
}

export default Footer;