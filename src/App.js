import React from 'react';
import {connect} from 'react-redux';

const App = (props) => {
    return (
        <>
          <h3>{props.counter}</h3>
        </>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

export default connect(mapStateToProps)(App)