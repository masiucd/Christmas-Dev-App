import * as React from 'react';
import UserForm from './UserForm';

export interface INewUserProps {}

export default function NewUser(props: INewUserProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, text: string) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div data-testid='newUser'>
      <h1 data-testid='page-title'>New User</h1>
      <UserForm onHandleSubmit={handleSubmit} />
    </div>
  );
}
