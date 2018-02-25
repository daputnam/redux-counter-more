import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {

    const {
      index,
      increment,
      decrement,
    } = this.props;

    return (
      <div>
        <h1>Counter {index}</h1>
        <button onClick={() => increment(index)}>Increment</button>
        {
          /*
          * If we need to reference this Counter's count,
          * it's much simpler to just pass it in as a prop
          * from where it's created in App.
          */
        }
        {this.props.count}
        {
          /*
           * Similarly, if we need to pass along an ownProp like `index`, it's
           * much more straightforward to do so by simply referencing the prop `index`
           * from within the render method - rather than trying to wrangle it in our
           * `mapDispatchToProps` method.
           */
        }
        <button onClick={() => decrement(index)}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counts: state.counts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: (index) => dispatch({ type: "INCREMENT", payload: index }),
  decrement: (index) => dispatch({ type: "DECREMENT", payload: index })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
