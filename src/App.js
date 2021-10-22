import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TagList from './component/TagList';

function App() {
  return (
    <>
      <TagList />

      <Router>
        <Link to="/">
          <img src="logo" alt="logo" />
        </Link>
        <Link exact to="/login">
          <button type="submit">Login</button>
        </Link>

        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/login">{/* <Login /> */}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
