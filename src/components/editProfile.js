import React, { Component } from 'react'

import Navbar from './navbar'

export default class Edit extends Component {
    render() {
        return(
            <div>
                <Navbar param='Profile' />
                <p>Edit Profile View</p>
            </div>
        )
    }
}