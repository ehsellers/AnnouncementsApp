import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import React, {useEffect } from 'react';
import ReactGA from 'react-ga';
import Title from './components/Title';
import EventsPage from './pages/EventsPage';
import Events from './pages/Events';
//import Select from 'react-select';

import './App.css';

const TRACKING_ID = "UA-228520279-1";

ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Title />
          <Route path="/announcements" component={EventsPage} exact />
          <Route path="/announcements/:id/:Name" component={Events} />
        </div>
      </div>
    </Router>
  );
}

export default App;
