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
import Quizz from './components/routes/Quizz';
import Dashboard from './components/routes/Dashboard';

function App() {
  return (
    <Router>
      <ToastProvider>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/destination/:name" component={Destination} />
            <Route path="/add-post/:destination" component={AddBlogPost} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/quizz" component={Quizz} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
        <Footer />
      </ToastProvider>
    </Router>
  );
}

export default App;
