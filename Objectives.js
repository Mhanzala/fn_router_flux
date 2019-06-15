import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

const Objectives = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        i have skill i will try to do mybbest part to gain more succes for this companty
      </Text>
      <Button title="Experience" onPress={() => Actions.Experience()}/>

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
    color: '#ffffff',
  },
});

export default Objectives;
