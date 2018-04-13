import React, { Component } from 'react'
import './Styles/search.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Navbar from './navbar'

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            userList: [],
            optionVal: '',
            inputVal: '',
            pages: [1,2,3,4,5]
        }

        this.search = this.search.bind(this)
    }

     componentDidMount() {
        axios.get('/auth/me').then( user => {
            this.setState({
                userInfo: user.data
            })
        }).catch( () => { this.props.history.push('/')})

        axios.get(`/api/searchUsers/${this.props.match.params.pg}?optionVal=${this.state.optionVal}&inputVal=${this.state.inputVal}`).then(users => {
            this.setState({
              userList: users.data
            });
          }, console.log(this.state.userList));
    }


    search() {
         axios.get(`/api/searchUsers/${this.props.match.params.pg}?optionVal=${this.state.optionVal}&inputVal=${this.state.inputVal}` ).then( users => {
          this.setState({
            userList: users.data
          })
        })
    }

    render() {
        const newUser = this.state.userList.map( (user, i) => {
          return (
            <div className="recommended_user_badge" key={user.user_id}>
              <div className="recommend_user_left">
                <img className="recommend_user_picture" src={user.picture} alt="user picture" />
                <div className="recommend_user_name">
                  <h3>{user.first_name}</h3>
                  <h3>{user.last_name}</h3>
                </div>
              </div>
              <div className="add_friend_button">Add Friend</div>
            </div>
        )  
    })

    const pages = this.state.pages.map( (page, i) => {
        return (
           <Link to={`/searchUsers/${page}`}><div className='page_button'>{page}</div></Link>
        )
    })
        return (
            <div className="search_container">
            <Navbar param="Search" />
            <section className="search_container_parent">
              <div className="search_header">
                <div className="header_left">
                  <select
                    onChange={ (e) => this.setState( {optionVal: e.target.value} ) }
                  >
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                  </select>
                  <input
                    className='search_input'
                    onChange={ (e) => this.setState({inputVal: e.target.value})}
                    type="text" />
                </div>
                <div className='buttons'>
                  <div onClick={ () => this.search() } className='search_button'>Search</div>
                  <div className='reset_button'>Reset</div>
                </div>
              </div>
              <div className="search_users_container" >
                {newUser}
              </div>
              <div className='pages_container'>
                {pages}
              </div>
            </section>
          </div>
       )
    }
}
