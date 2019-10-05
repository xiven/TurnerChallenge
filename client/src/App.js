import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import Titles from './components/titles/Titles';
import Modal from './components/titles/Modal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Modal />
          <Titles />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
