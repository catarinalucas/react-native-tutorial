//Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
//se for um js file nao precisamos de por .js
import Header from './src/components/header';

//Create a component
//Component of the app
const App = ()  => (
    <Header />//Self-closing component
  );



//Render the component to the device
AppRegistry.registerComponent('teste', () => App);
