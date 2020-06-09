import React from 'react';
import {
  cleanup,
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import Timer from '../components/Timer';

afterEach(cleanup);

describe('increases counter after given amount of ms', () => {
  it('<Timer />', async () => {
    const { getByTestId, getByText } = render(<Timer />);

    fireEvent.click(getByTestId('btn-up'));

    expect(getByTestId('btn-up')).toHaveAttribute('disabled');

    const counter = await waitForElement(() => getByText('1'));
    expect(counter).toHaveTextContent('1');

    fireEvent.click(getByTestId('btn-down'));
    expect(counter).toHaveTextContent('0');
  });
});
