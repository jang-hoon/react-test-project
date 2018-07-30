import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElemment = document.getElementById('root');
ReactDOM.render(<App />, rootElemment);

// if(module.hot) {
//     module.hot.accept();
// }