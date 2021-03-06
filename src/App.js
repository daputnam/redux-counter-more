import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './containers/Counter';
import reducer from './reducers/reducer'
import AddCounter from './components/AddCounter'

function addCounter() {
  store.dispatch({ type: "ADD_COUNTER"})
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {store.getState().counts.map((count,index)=> {
            return <Counter index={index}/>
          })}
          <AddCounter addCounter={addCounter}/>
        </div>
      </Provider>

    );
  }
}

export default App;
