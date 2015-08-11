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

class TaskPage extends React.Component {

  task = {
    title: 'Sample task',
    description: 'Some short description'
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(React.findDOMNode(this.refs.email).value);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>{this.task.title}</h3>
              <p>{this.task.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TaskPage;
