import * as React from 'react';
import { RouteComponentProps, match, Link } from 'react-router-dom';

type T = StarWarsChar | null;

interface Props extends RouteComponentProps {
  match: match<{ id: string }>;
}

const UserDetails: React.FC<Props> = ({ match }) => {
  const [user, setUser] = React.useState<T>(null);

  const getUser = async (id: string) => {
    const res = await fetch('https://swapi.dev/api/people/' + id);
    const data = await res.json();

    setUser(data);
  };

  React.useEffect(() => {
    getUser(match.params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {' '}
      <h3>name {user?.name}</h3>
      <h3>height {user?.height}</h3>
      <h3>mass {user?.mass}</h3>
      <h3>eye color {user?.eye_color}</h3>
      <h3>gender {user?.gender}</h3>
      <Link to='/'>Back</Link>
    </div>
  );
};
export default UserDetails;
