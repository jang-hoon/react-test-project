import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

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
                Hello, Redux!
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default hot(module)(App);
