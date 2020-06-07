import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewUser from './components/NewUser';

//  clean the DOM after each test!
afterEach(cleanup);

describe('testing newUser component', () => {
  test('<NewUser/>', () => {
    const { debug, container, getByTestId, queryByTestId } = render(
      <NewUser />,
    );

    const pageTitle = getByTestId('page-title');
    const userForm = queryByTestId('user-form');

    expect(pageTitle.tagName).toBe('H1');
    expect(pageTitle.textContent).toBe('New User');
    expect(userForm).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
    // debug();
  });
});
