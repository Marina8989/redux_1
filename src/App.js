import React from 'react';
import { connect} from 'react-redux';
import { incrementCounter, decrementCounter} from './store';

const App = (props) => {
    return (
        <>
           <h2>{props.counter}</h2>
          <button onClick={props.increment}>+</button>
          <button onClick={props.decrement}>-</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})
const mapDispatchToProps = {
    increment: incrementCounter,
    decrement: decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App);