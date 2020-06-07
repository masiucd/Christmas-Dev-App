import * as React from 'react';
import UserForm from './UserForm';

export interface INewUserProps {}

export default function NewUser(props: INewUserProps) {
  return (
    <div data-testid='newUser'>
      <h1 data-testid='page-title'>New User</h1>
      <UserForm />
    </div>
  );
}
