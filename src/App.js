import React from 'react';
import { Provider } from "react-redux";
import PropTypes from 'prop-types';
import history from "./history" 
import {Router} from 'react-router-dom';
import store from './store/configureStore';
import './App.css';

import Routes from './routes/routes'

import SideBar from './common/SideBar'
import Header from './common/Header';

class App extends React.Component {

  static defaultProps = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render = () => (
    <div className="bg-gray-100 text-gray-700 min-h-screen">
      <Provider store={store}>
        <Router history={history}>
          <div className="p-8">
            <div className="flex justify-between">
              <div className="mr-4" >
                <SideBar />
              </div>
              <div className="flex-1">
                  <Header />
                  <Routes />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
