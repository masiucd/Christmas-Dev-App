import * as React from 'react';
import User from './User';

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

  console.log(users);
  return (
    <div>
      {users.length > 0 &&
        users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};
export default UserList;
