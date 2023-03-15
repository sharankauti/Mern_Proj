import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from '../src/Users/pages/User'
import NewPlaces from './Places/pages/NewPlaces';
import { Redirect, Route,Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import MainNavigation from './Shared/Componets/Navigation/MainNavigation';
import UserPlaces from './Places/pages/UserPlaces';

function App() {
  return (
    <>
     
        <MainNavigation/>
          <Switch>
              <Route path='/' exact component={User}></Route>
              <Route path='/:userId/places' exact component={UserPlaces}></Route>
              <Route path='/places/new' exact component={NewPlaces}></Route>
              <Redirect to='/'/>
          </Switch>
    </>
  );
}

export default App;
