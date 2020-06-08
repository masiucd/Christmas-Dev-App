import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

function App() {
  return (
    <div className='App'>
      <UserList />
      <NewUser />
    </div>
  );
}

export default App;
