import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Counter from './Counter'

const propTypes = {

};

const defaultProps = {

};

class App extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default hot(module)(App);
