import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Header from './components/Header';
import AddBlogPost from './components/routes/AddBlogPost';
import ContactUs from './components/routes/ContactUs';
import AboutUs from './components/routes/AboutUs';
import Destination from './components/routes/Destination';
import PostDetails from './components/routes/PostDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/destination/:name" component={Destination} />
          <Route path="/add-post" component={AddBlogPost} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
