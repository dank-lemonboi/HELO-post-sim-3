import React, { Component } from 'react'
import axios from 'axios'
import './Styles/navbar.css'
import { Link } from 'react-router-dom'

import Home from '../assets/home.png'
import Search from '../assets/search.png'

export default class Navbar extends Component {
    constructor(props){
        super(props)

        // this.logOut = this.logOut.bind(this)
    }

    // logOut() {
    //     axios.get('/api/logout').then( res => {
    //         console.log('user logged out')
    //         }).catch()
    // }

    render(){
        return <div className="navbar_parent">
            <div className="navbar_left_container">
              <div className="container_left_title">Helo</div>
              <Link to="/dashboard">
                <img src={Home} alt="Home Navbar Icon" />
              </Link>
              <Link to={`/searchUsers/1`}>
                <img src={Search} alt="Search Navbar Icon" />
              </Link>
            </div>
            <div className="navbar_center">{this.props.param}</div>
            <div className="navbar_right_container">
              <a href={process.env.REACT_APP_LOGOUT}>
                <div className="logout_button">Logout</div>
              </a>
            </div>
          </div>;
    }
}