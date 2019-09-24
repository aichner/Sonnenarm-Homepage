//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Components
import {
  Intro,
} from '../../organisms';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Intro />
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
