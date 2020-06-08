import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import UserForm from './components/UserForm';

afterEach(cleanup);

const onSubmit = jest.fn(
  (e: React.FormEvent<HTMLFormElement>, text: string) => {
    e.preventDefault();
    console.log(text);
  },
);

describe('testing <UserForm />', () => {
  test('<UserForm />', () => {
    const {
      debug,
      getByTestId,
      queryByTestId,
      getByText,
      getByLabelText,
    } = render(<UserForm onHandleSubmit={onSubmit} />);

    expect(queryByTestId('user-form')).toBeTruthy();

    // fireEvent.change(getByLabelText('Text'));

    fireEvent.change(getByLabelText('Text'), {
      target: { value: 'hi' },
    });

    fireEvent.click(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);

    // expect(onSubmit).toHaveBeenCalledWith({ target: { value: 'hi' } });
  });
});
