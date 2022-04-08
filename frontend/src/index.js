import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { Provider } from "react-redux";
import store from './redux/redux-store';
import 'bootstrap/dist/css/bootstrap.min.css';

let renderEntireTree = (state) => {


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());
// вызов первый раз для отрисовки

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})
