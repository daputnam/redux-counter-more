import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.increment;
  }
  decrement = () => {
    this.props.decrement;
  }

  render() {
    return (
      <div>
        <h1>Counter {this.props.index}</h1>
        <button onClick={this.props.increment}>Increment</button>
        {this.props.counts[this.props.index]}
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counts: state.counts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch({ type: "INCREMENT", payload: ownProps.index}),
  decrement: () => dispatch({ type: "DECREMENT", payload: ownProps.index })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
