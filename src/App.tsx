import React from 'react';
import './App.css';
import NewUser from './components/NewUser';
import UserList from './components/UserList';
import { Switch, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import SearchWrapper from './components/SearchWrapper';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route exact path='/newuser' component={NewUser} />
          <Route exact path='/user/:id' component={UserDetails} />
          <Route exact path='/search' component={SearchWrapper} />
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
