import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'

export default class Dashboard extends Component {
    constructor(){
        super()


    }

    componentDidMount() {
        axios.get('/auth/me').then( () => {
            console.log('Welcome to the Dashboard')
        }).catch( () => { this.props.history.push('/')})
    }

    render(){
        return(
            <div>
                <Navbar 
                param='Dashboard'
                />
                <p>Dashboard View!</p>
            </div>
        )
    }
}