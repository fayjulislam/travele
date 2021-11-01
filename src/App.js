import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Services from './components/Home/Services/Services';
import Singleservice from './components/Home/SingleService/Singleservice';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Singleblog from './components/SingleBlog/Singleblog';
import Footer from './components/Shared/Footer/Footer';
import Packages from './components/Home/Packages/Packages';
import BookNow from './components/BookNow/BookNow';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewPackage from './components/AddNewPackage/AddNewPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/single-service/:slug">
              <Singleservice></Singleservice>
            </PrivateRoute>
            <PrivateRoute exact path="/packages">
              <Packages></Packages>
            </PrivateRoute>
            <Route exact path="/single-blog/:slug">
              <Singleblog></Singleblog>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addNewPackage">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/bookNow/:id">
              <BookNow></BookNow>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
