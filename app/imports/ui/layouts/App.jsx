import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Commercial from '../pages/Commercial';
import CommercialHVACPMS from '../pages/CommercialHVACPMS';
import CommercialRefer from '../pages/CommercialRefer';
import Contact from '../pages/Contact';
import Heating from '../pages/Heating';
import Industrial from '../pages/Industrial';
import Install from '../pages/Install';
import NotFound from '../pages/NotFound';
import PMS from '../pages/PMS';
import Products from '../pages/Products';
import Repair from '../pages/Repair';
import Residential from '../pages/Residential';
import Terms from '../pages/Terms';
import ListUsersAdmin from '../pages/ListUsersAdmin';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/about" component={About}/>
            <Route path="/commercial" component={Commercial}/>
            <Route path="/commercialhvacpms" component={CommercialHVACPMS}/>
            <Route path="/commercialrefer" component={CommercialRefer}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/heating" component={Heating}/>
            <Route path="/industrial" component={Industrial}/>
            <Route path="/install" component={Install}/>
            <Route path="/pms" component={PMS}/>
            <Route path="/products" component={Products}/>
            <Route path="/repair" component={Repair}/>
            <Route path="/residential" component={Residential}/>
            <Route path="/terms" component={Terms}/>
            <AdminProtectedRoute path="/admin" component={ props => <ListUsersAdmin {...props} />} />
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
