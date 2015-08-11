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

class TaskList extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(React.findDOMNode(this.refs.email).value);
  };

  render() {
    return (
      <div className="row">
        <div className="list-group">
          {this.props.tasks.map((task) => {
            return (
              <a href="/tasks/42" className="list-group-item">
                <h4 className="list-group-item-heading">{task.title} <span className="label label-primary">New</span></h4>
                <p className="list-group-item-text">{task.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

}

export default TaskList;
