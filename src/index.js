import './index.scss';
import React from 'react';
import ReactDOM from "react-dom" ;
import reportWebVitals from './reportWebVitals';
import store from "./state/store"
import Sheepmeadow from './components/CSheepmeadow';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderFunc = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <Sheepmeadow 
                    dispatch={store.dispatch.bind(store)}
                    state={state} />
            </Provider>
        </React.StrictMode>
    );
}

rerenderFunc(store.getState());
store.subscribe(() => {
    rerenderFunc(store.getState());
});


reportWebVitals();
