import React, { Component } from 'react'
import axios from 'axios'

import Navbar from './navbar'

import './Styles/edit.css'

export default class Edit extends Component {
    constructor() {
        super()

        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        axios.get('/auth/me').then( user => {
            this.setState({
                userInfo: user.data
            })
        })
    }

    render() {
        return(
            <div className='edit_parent_container'>
                <Navbar 
                param='Profile' 
                />

                <div className='edit_parent_parent'>
                <div className='profile_user_container'>
                <div className='user_info_parent'>
                    <div className='user_info_left'>
                        <img src={this.state.userInfo.picture} alt="user picture"/>
                    </div>
                    <div className='user_info_right'>
                        <span>
                        { 
                            (this.state.userInfo.first_name) 
                            ? 
                            this.state.userInfo.first_name 
                            : 
                            'First Name'
                        }
                        </span>
                        <span>
                        {
                            (this.state.userInfo.last_name) 
                            ?
                             this.state.userInfo.last_name 
                             :
                              'Last Name'
                        }
                        </span>
                    </div>
                    </div>
                     <div className='edit_button_container'>
                        <div className='update_btn'>Update</div>
                        <div className='cancel_btn'>Cancel</div>
                    </div>
                </div>
                <section className=''>
                        
                </section>
               </div>
            </div>
        )
    }
}