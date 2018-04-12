import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import './Styles/dashboard.css'

import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            userInfo: {},
            users: []
        }
    }

    componentDidMount() {
        axios.get('/auth/me').then( user => {
            this.setState({
                userInfo: user.data
            })
        // axios.get(`/api/getusers?filterValue=${}`).then( users => {
        //   this.setState({
        //     users: users.data
        //   })
        // })
        }).catch( () => { this.props.history.push('/')})
    }

    render(){
        console.log(this.state)
        return (
            <div className="dashboard">
            <Navbar param="Dashboard" />

            <div className="dashboard_parent_container">
              <section className="dashboard_child_top">
                <div className="user_badge">
                  <div className="user_badge_left">
                    <img  src={this.state.userInfo.picture} alt="User Image" />
                  </div>
                  <div className="user_badge_right">
                    <span className="user_first_name">
                    { 
                      (this.state.userInfo.first_name) 
                      ?
                       this.state.userInfo.first_name 
                      :
                        null
                    }
                       </span>
                    <span className="user_last_name">{ 
                      (this.state.userInfo.last_name) 
                      ?
                       this.state.userInfo.last_name
                      :
                        null 
                    }
                      </span>
                    
                     <Link style={{color: 'black'}} to='/profile'><div className='edit_button'>Edit Profile</div></Link>
                    
                  </div>
                </div>
                <div className="dashboard_onboarding_container">
                  <span>
                    Welcome to Helo! Find recommended friends based on
                    your similarities, and even search for them by name.
                    The more you update your profile, the better
                    recommendations we can make!
                  </span>
                </div>
              </section>

              <section className="dashboard_recommend_parent">
                <div className="dashboard_recommend_header">
                  <span>Recommended Friends</span>
                  <div className="recommend_header_left">
                    <span>Sorted By </span>
                    <select>
                      <option value="first_name">First Name</option>
                      <option value="last_name">Last Name</option>
                      <option value="gender">Gender</option>
                      <option value="hobby">Hobby</option>
                      <option value="hair_color">Hair Color</option>
                      <option value="eye_color">Eye Color</option>
                      <option value="birthday">Birthday</option>
                    </select>
                  </div>
                </div>
                <div className="recommend_users_parent">
                  <div className="recommend_users_child">
                  
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
    }
}