import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Objectives from "./src/Objectives";
import Education from "./src/Education";
import Experience from "./src/Experience";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Objectives" component={Objectives} title="Objectives" initial />
        <Scene key="Education" component={Education} title="Education" /> 
        <Scene key="Experience" component={Experience} title="Experience" /> 
      </Scene>
    </Router>
  );
}

export default App;

