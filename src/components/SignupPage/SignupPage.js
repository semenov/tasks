/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

//import './LandingPage.less';
import React, { PropTypes } from 'react';
import Navbar from '../Navbar';

class SignupPage extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(React.findDOMNode(this.refs.email).value);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
          <div className="container">
            <h1>Register</h1>
            <p>Create your account in tasks app</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="user-email">Email address</label>
                <input ref="email" type="email" className="form-control" id="user-email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="user-password">Password</label>
                <input type="password" className="form-control" id="user-password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default">Sign up</button>
            </form>
          </div>
      </div>
    );
  }

}

export default SignupPage;
