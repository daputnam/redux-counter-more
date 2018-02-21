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
        <button onClick={this.props.increment}>Increment</button>
        {this.props.count}
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
