import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return !user ? null : (
    <Link to={`user/${user.id}`} data-testid='user-link'>
      {' '}
      <h1> {user.name} </h1>{' '}
      <img
        style={{ width: 300 }}
        data-testid='user-img'
        src='https://images.pexels.com/photos/4328961/pexels-photo-4328961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alt=''
      />
    </Link>
  );
};
export default User;
