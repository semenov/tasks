/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './LandingPage.less';
import React, { PropTypes } from 'react';
import Navbar from '../Navbar';

class LandingPage {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Tasks</h1>
            <p>Complex task management made easy</p>
            <p><div className="btn btn-primary btn-lg" href="#" role="button">Try for free</div></p>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
