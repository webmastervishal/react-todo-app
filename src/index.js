import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'antd/dist/antd.css';
import {store,persistor} from './Store';
import './style.css';

import AppRouter from './router/AppRouter';

ReactDOM.render(<Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
        <AppRouter />
    </PersistGate>
</Provider>, document.getElementById('root'));

