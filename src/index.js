import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

//bootstrap css since Reactstrap does not include Bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
