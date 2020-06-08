import * as React from 'react';

interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return !user ? null : (
    <div>
      {' '}
      <h1> {user.name} </h1>{' '}
    </div>
  );
};
export default User;
