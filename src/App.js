import React from 'react';
import { connect} from 'react-redux';
import { incrementCounter} from './store';

const App = (props) => {
    return (
        <>
          <h3 onClick={props.increment}>{props.counter}</h3>
        </>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})
const mapDispatchToProps = {
    increment: incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App);