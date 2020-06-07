import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import Counter from './components/Counter';

afterEach(cleanup);
test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);

  const counterBtn = getByTestId('counter-btn');
  const resetBtn = getByTestId('reset-btn');
  const counterH1 = getByTestId('h1');

  expect(counterBtn.tagName).toBe('BUTTON');
  expect(counterBtn.className).toBe('btn');
  expect(counterBtn.textContent).toBe('counter');
  expect(resetBtn.textContent).toBe('reset');
  expect(counterH1.textContent).toBe('0');

  fireEvent.click(counterBtn);
  expect(counterH1.textContent).toBe('1');

  fireEvent.click(counterBtn);
  expect(counterH1.textContent).toBe('2');

  fireEvent.click(resetBtn);
  expect(counterH1.textContent).toBe('0');
});
