import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Home from './components/routes/Home';
import Header from './components/Header';
import AddBlogPost from './components/routes/AddBlogPost';
import ContactUs from './components/routes/ContactUs';
import AboutUs from './components/routes/AboutUs';
import Destination from './components/routes/Destination';
import PostDetails from './components/routes/PostDetails';
import Footer from './components/Footer';

import { PostsContextProvider } from './components/PostsContext';

function App() {
  return (
    <PostsContextProvider>
      <Router>
        <ToastProvider>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/destination/:id" component={Destination} />
              <Route path="/add-post" component={AddBlogPost} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/posts/:id" component={PostDetails} />
            </Switch>
          </main>

          <Footer />
        </ToastProvider>
      </Router>
    </PostsContextProvider>
  );
}

export default App;
