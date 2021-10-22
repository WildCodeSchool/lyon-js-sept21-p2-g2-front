import {
  BrowserRouter as Router,
  Switch,
  Route /*Link*/,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Link to="/">
        <img src="logo" alt="logo" />
      </Link>
      <Link exact to="/login">
        <button type="submit">Login</button>
      </Link> */}

      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/login">{/* <Login /> */}</Route>

        <Route path="/contact-us">{/* <Contact /> */}</Route>
        <Route path="/about-us">{/* <About /> */}</Route>
        <Route path="/result">{/* <Result /> */}</Route>
        <Route path="/dashboard">{/* <Dashboard /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
