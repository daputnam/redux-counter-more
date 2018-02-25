import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { createStore } from 'redux';
import Counter from './containers/Counter';
import reducer from './reducers/reducer'

const mapStateToProps = (state) =>
  ({
    counts: state.counts,
  });

// TODO: add this as an onClick handler to a button in your App component
const mapDispatchToProps = (dispatch) =>
  ({
    addCounter: () => ({ type: 'ADD_COUNTER' }),
  });


class App extends Component {
  render() {

    const { counts } = this.props;

    return (
      <div className="App">
        {
          counts.map((count, index) =>
            <Counter
              index={index}
              key={index}
              count={count}
            />
          )
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
