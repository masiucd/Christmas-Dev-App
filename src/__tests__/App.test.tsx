import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Counter from '../components/Counter';

afterEach(cleanup);
test('<Counter />', () => {
  const { debug, getByTestId, container } = render(<Counter />);

  const counterBtn = getByTestId('counter-btn');
  const counterBtnMinus = getByTestId('counter-btn-minus');
  const resetBtn = getByTestId('reset-btn');
  const counterH1 = getByTestId('h1');

  expect(counterBtn.tagName).toBe('BUTTON');
  expect(counterBtn.className).toBe('btn');
  expect(counterBtn.textContent).toBe('increase');
  expect(counterBtnMinus.textContent).toBe('decrease');
  expect(resetBtn.textContent).toBe('reset');
  expect(counterH1.textContent).toBe('0');

  fireEvent.click(counterBtn);
  expect(counterH1.textContent).toBe('1');

  fireEvent.click(counterBtn);
  expect(counterH1.textContent).toBe('2');
  fireEvent.click(counterBtnMinus);
  expect(counterH1.textContent).toBe('1');

  fireEvent.click(counterBtn);
  expect(counterH1.textContent).toBe('2');

  fireEvent.click(resetBtn);
  expect(counterH1.textContent).toBe('0');

  expect(container.firstChild).toMatchSnapshot();
});
