import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import User from './components/User';
import { MemoryRouter } from 'react-router-dom';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

describe('testing User component', () => {
  test('<User />', () => {
    // const { debug } = render(<User />);
    render(<User />);
    expect(console.error).toBeDefined();
    expect(console.error).not.toBeCalledWith('foo');
    expect(console.error).toBeCalledTimes(0);
  });

  const user: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  test('<User /> with user', () => {
    // const { debug } = render(<User />);
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <User user={user} />
      </MemoryRouter>,
    );
    expect(getByText('Leanne Graham')).toBeInTheDocument();
    expect(console.error).not.toBeCalled();
    expect(getByTestId('user-link').getAttribute('href')).toBe(
      `/user/${user.id}`,
    );
    expect(getByTestId('user-img').getAttribute('src')).toBe(
      'https://images.pexels.com/photos/4328961/pexels-photo-4328961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    );
  });
});
