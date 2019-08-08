import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import '../ReactotronConfig';

import Todo from './components/Todo';

export default class App extends Component {

  state = {
    todos: [
      { id: 0, text:'Fazer cafe'},
      { id: 1, text: 'Estudar GoNative'},

    ]
  }

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, {id: Math.random(), text:'Novo Todo'}]})
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map( todo => <Todo title={todo.text} key={todo.id}/>)}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
