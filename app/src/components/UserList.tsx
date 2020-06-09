import * as React from 'react';
import User from './User';
import Title from './Title';
import Timer from './Timer';

interface Props {}

const UserList: React.FC<Props> = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <Title mainTitle='Users List' subTitle='something nice' />
      <Timer />
      {users.length > 0 &&
        users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};
export default UserList;
