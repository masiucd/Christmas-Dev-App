import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Link to='/' style={{ margin: 10 }}>
          {' '}
          Home
        </Link>
        <Link to='/newuser' style={{ margin: 10 }}>
          new user
        </Link>
        <Link to='/search' style={{ margin: 10 }}>
          search
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
};
export default Layout;
