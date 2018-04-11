import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getFirst, getLast, whatGender, eyeColor, getHobby, getBirthDay, getBirthMonth, getBirthYear } from '../ducks/reducer'

import Navbar from './navbar'

import './Styles/edit.css'

class Edit extends Component {
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
        const { getFirst, getLast, whatGender, eyeColor, getHobby, getBirthDay, getBirthMonth, getBirthYear  } = this.props
        return <div className="edit_parent_container">
            <Navbar param="Profile" />

            <div className="edit_parent">
              <div className="profile_user_container">
                <div className="user_info_parent">
                  <div className="user_info_left">
                    <img src={this.state.userInfo.picture} alt="user picture" />
                  </div>
                  <div className="user_info_right">
                    <span>
                      {this.state.userInfo.first_name
                        ? this.state.userInfo.first_name
                        : null}
                    </span>
                    <span>
                      {this.state.userInfo.last_name
                        ? this.state.userInfo.last_name
                        : null}
                    </span>
                  </div>
                </div>
                <div className="edit_button_container">
                  <div className="update_btn">Update</div>
                  <div className="cancel_btn">Cancel</div>
                </div>
              </div>
              <section className="edit_info_container">
                <div className="edit_info_wrapper">
                  <div className="user_edit_left">
                    <span>First Name</span>
                    <input placeholder="Please Enter your First Name" />
                    <span>Last Name</span>
                    <input placeholder="Please Enter your First Name" />
                    <span>Gender</span>
                    <select>
                      <option value="">-------</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="non-binary">Non-Binary</option>
                      <option value="N/A">N/A</option>
                    </select>
                    <span>Hair Color</span>
                    <select>
                      <option value="">-------</option>
                      <option value="black">Black</option>
                      <option value="brown">Brown</option>
                      <option value="blonde">Blonde</option>
                      <option value="bald">Bald</option>
                    </select>
                    <span>Eye Color</span>
                    <select>
                      <option value="">-------</option>
                      <option value="brown">Brown</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                    </select>
                  </div>
                  <div className="user_edit_right">
                    <span>Hobby</span>
                    <select>
                      <option value="">-------</option>
                      <option value="programming">Programming</option>
                      <option value="hiking">Hiking</option>
                      <option value="video games">Video Games</option>
                      <option value="paragliding">Paragliding</option>
                    </select>
                    <span>Birthday Day</span>
                    <select>
                      <option value="">-------</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <span>Birthday Month</span>
                    <select>
                      <option value="">-------</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <span>Birthday Year</span>
                    <select>
                      <option value="">-------</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                    </select>
                  </div>
                </div>
              </section>
            </div>
          </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, 
{ getFirst, getLast, whatGender, eyeColor, getHobby, getBirthDay, getBirthMonth, getBirthYear } )(Edit)