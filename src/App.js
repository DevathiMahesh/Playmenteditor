import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="">
        <Redirect  to="/home" />
        </Route>
        <Route path="/home" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
