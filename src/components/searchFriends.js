import React, { Component } from 'react'

import Navbar from './navbar'

export default class Search extends Component {
    render() {
        return(
            <div>
            <Navbar param='Search'/>
                <p>Search View</p>
            </div>
        )
    }
}