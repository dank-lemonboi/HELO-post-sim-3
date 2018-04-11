import React, {Component} from 'react'
import axios from 'axios'

import Logo from '../assets/logo.png'
import './Styles/login.css'

import '../assets/logo.png'

export default class Login extends Component {
    constructor() {
        super()

        // this.login = this.login.bind(this)
    }

    // login() {
    //         window.location.href = process.env.REACT_APP_LOGIN
    // }
    
    render() {
        console.log(this)
        return <div className="login_parent">
            <div className="login_wrapper">
              <div className="logo_wrapper">
                <img src={Logo} alt="login logo" />
                <h1>Helo</h1>
              </div>
              <div className="button_container">
                <a href={process.env.REACT_APP_LOGIN}>
                  <div className="login_button">Login / Register</div>
                </a>
              </div>
            </div>
          </div>;
    }

}