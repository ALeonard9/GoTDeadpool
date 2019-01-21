import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import chalk from 'chalk';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Valar Morghulis</Text>
        <Button
          onPress={() => {
            console.log(chalk.blue('Hello world!'))
          }}
          title="Enter GoT Deapool"
          color="#b2b2b2"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:48,
     color: 'white',
     marginBottom: 20,
  }
});
