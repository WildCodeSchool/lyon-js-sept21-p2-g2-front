import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TagList from './components/TagList';
import Header from './components/Header';
import accueil from './components/routes/Accueil';
import ResultsPage from './components/routes/ResultsPage';
import Dashboard from './components/routes/Dashboard';
import AddBlogPost from './components/routes/AddBlogPost';
import ContactUs from './components/routes/ContactUs';
import AboutUs from './components/routes/AboutUs';

function App() {
  return (
    <>
      <Header />
      <Home />
      <TagList />

      <Router>
        <Switch>
          <Route exact path="/" component={accueil} />
          <Route path="/ResultsPage" component={ResultsPage} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/AddBlogPost" component={AddBlogPost} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/AboutUs" component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
