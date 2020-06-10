import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserDetails from '../components/UserDetails';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = { params: { id: 'asdasdas' } };

console.error = jest.fn();

test('<UserDetails />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      user: {
        id: '21',
        name: 'Luke',
      },
    }),
  );

  const { debug } = render(
    <MemoryRouter>
      <UserDetails match={match} />
    </MemoryRouter>,
  );

  debug();
});
