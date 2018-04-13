import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Edit from './components/editProfile'
import Search from './components/searchFriends'

export default (
  <Switch>
    <Route path='/' component={Login} exact />
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/profile' component={Edit}/>
    <Route path='/searchUsers/:pg' component={Search}/>
  </Switch>
);