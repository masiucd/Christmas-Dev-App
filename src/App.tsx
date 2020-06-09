import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import NewUser from './components/NewUser';
import UserList from './components/UserList';
import { Switch, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={UserList} />
        <Route exact path='/newuser' component={NewUser} />
        <Route exact path='/user/:id' component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
