import * as React from 'react';

export interface IUserFormProps {}
// https://jsonplaceholder.typicode.com/users
export default function UserForm(props: IUserFormProps) {
  return (
    <form data-testid='user-form'>
      <div className='form-grop'>
        <input type='text' />
      </div>
      <div className='form-grop'>
        <input type='text' />
      </div>
      <div className='form-grop'>
        <input type='text' />
      </div>
      <button type='submit'></button>
    </form>
  );
}
