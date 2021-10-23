import {
  BrowserRouter as Router,
  Switch,
  Route /* Link */,
} from 'react-router-dom';
import Home from './components/Home';
// import TagList from './components/TagList';
import Header from './components/Header';
import AbstractBlogPost from './components/AbstractBlogPost';

function App() {
  return (
    <>
      <Header />
      <Home />
      <AbstractBlogPost />

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
