import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

/**
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */

const initialState = {
  count: 0
}
const reducer = (state = initialState,action) => {
  switch(action.type)
  {
    case 'INCREASE_COUNTER':
    return{count: state.count + 1}
    case 'DECREASE_COUNTER':
    return{count: state.count - 1}
  }
  return state;
}

const store = createStore(reducer)

export default class App extends React.Component {

  
  render(){
    return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
