import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Title from './components/Title';
import EventsPage from './pages/EventsPage';
import Events from './pages/Events';
//import Select from 'react-select';

import './App.css';

function App() {
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
