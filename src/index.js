import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import useGlobalState from './store/useGlobalState'
import Context from './store/context'

const Index = () => {
  const store = useGlobalState()
  return (
    <Context.Provider value={store}>
      <App/>
    </Context.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);
