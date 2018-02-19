import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { App } from './components';
import './index.css';

const store = createStore(reducer)

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
