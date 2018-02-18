import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  }
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  }

  render() {
    return (
      <div>
        <h1>Counter Plus</h1>
        <button onClick={this.increment}>Increment</button>
        {this.props.count}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
