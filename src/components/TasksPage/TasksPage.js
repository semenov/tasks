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
import TaskList from '../TaskList';

class TasksPage extends React.Component {

  tasks = [
    {
      title: 'Sample task',
      description: 'Some short description'
    },
    {
      title: 'Make a lot of money',
      description: 'Be patient and work a lot'
    },
    {
      title: 'Improve frontend skills',
      description: 'Become a master of React'
    }
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(React.findDOMNode(this.refs.email).value);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <TaskList tasks={this.tasks} />
        </div>
      </div>
    );
  }

}

export default TasksPage;
