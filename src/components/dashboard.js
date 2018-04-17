import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import './Styles/dashboard.css'

import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInfo: {},
            userList: [],
            filterVal: ''
        }

        this.addFriend = this.addFriend.bind(this)
    }

    componentDidMount() {
        axios.get('/auth/me').then( user => {
            this.setState({
                userInfo: user.data
            })
        axios.get(`/api/getusers`).then( users => {
          this.setState({
            userList: users.data
          })
        })
        }).catch( () => { this.props.history.push('/')})
    }

    addFriend(friendId) {
      axios.put('/api/addfriend', { friendId } ).then( users => {
        this.setState({
          userList: users.data
        })
      })
    }

    render(){
      console.log(this.state.userList, this.state.userInfo)
      const { filterVal, userList, userInfo } = this.state
        const filteredList = userList.filter( elem => {
          
          if (filterVal === 'first_name') {
            return elem.first_name === userInfo.first_name
          }
          if (filterVal === 'last_name') {
            return elem.last_name === userInfo.last_name
          }
          if (filterVal === "hobby") {
            return elem.hobby === userInfo.hobby
          }
          if (filterVal === 'gender') {
            return elem.gender === userInfo.gender
          }
          if (filterVal === 'hair_color') {
            return elem.hair_color === userInfo.hair_color
          }
          if (filterVal === 'eye_color') {
            return elem.eye_color === userInfo.eye_color
          }
          if (filterVal === 'birthday') {
            return (elem.birth_day === userInfo.birth_day && elem.birth_month === userInfo.birth_month && elem.birth_year === userInfo.birth_year)
          } 
          if (filterVal === '') {
            return userList;
          } 
        })
        const newUser = filteredList.map( (user, i) => {
          return (
            <div className="recommended_user_badge" key={user.user_id}>
              <div className="recommend_user_left">
                <img className="recommend_user_picture" src={user.picture} alt="user picture" />
                <div className="recommend_user_name">
                  <h3>{user.first_name}</h3>
                  <h3>{user.last_name}</h3>
                </div>
              </div>
              <div onClick={ () => this.addFriend(user.user_id) } className="add_friend_button">Add Friend</div>
            </div>
        )  
        })
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
                    <select
                      onChange= { (e) => this.setState({ filterVal: e.target.value }) }
                    >
                      <option value={''}>------------</option>
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
                   {newUser}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
    }
}