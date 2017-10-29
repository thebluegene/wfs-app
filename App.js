import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        searchInput: ''
      };
  }

  handleButton() {
    Alert.alert("Hello");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.smallTitle}>We will find</Text>
        <Text style={styles.title}>Something</Text>
        <TextInput
          style={styles.homeInput}
          placeholder="Test"
          onChangeText={(searchInput) => this.setState({searchInput})}
        />
        <Button
          onPress={this.handleButton.bind(this)}
          title="Submit"
        />
        <Text> {this.state.searchInput} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30
  },
  smallTitle: {
    fontSize: 28,
    textAlign: 'center'
  },
  homeInput: {
    width: 200,
    height: 50,
    marginBottom: 30,
    backgroundColor: 'white'
  }
});
