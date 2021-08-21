import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './views/SignUp'
import LogIn from './views/LogIn'
import Deliveries from './views/Deliveries';
import ContextProvider  from './context/appContext';
import Messengers from './views/Messengers';
import CreateMessenger from './views/CreateMessenger';
import CreateDelivery from './views/CreateDelivery';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact sensitive path="/deliveries" component={Deliveries} />
          <Route exact sensitive path="/deliveries/create" component={CreateDelivery} />
          <Route exact sensitive path="/deliveries/edit/:id" component={CreateDelivery} />
          <Route exact sensitive path="/messengers" component={Messengers} />
          <Route exact sensitive path="/messengers/create" component={CreateMessenger} />
          <Route exact sensitive path="/messengers/edit/:id" component={CreateMessenger} />
          <Route exact sensitive path="/register" component={SignUp} /> 
          <Route exact sensitive path="/" component={LogIn} />
          </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
