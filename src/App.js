import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './containers/Counter';

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }

}
const store = createStore(reducer);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>

    );
  }
}

export default App;
