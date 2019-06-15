import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code


const Experience = () => {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      1 month expericence in horizon.tech as react-native developrer
      </Text>
      <Button title="Experience" onPress={() => Actions.Education()}/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});

export default Experience;
