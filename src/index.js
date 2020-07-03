import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import { Provider } from "react-redux";
import store from './store';
import { selectCategory, fetchNews } from "./actions/actions";

store.dispatch(selectCategory("1"));
store.dispatch(fetchNews("1")).then(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
