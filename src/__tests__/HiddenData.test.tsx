import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HiddenData from '../components/HiddenData';

describe('Show children when checked', () => {
  test('<HiddenData />', () => {
    const testData = 'hello there';
    const { queryByText, getByLabelText, getByText } = render(
      <HiddenData>{testData}</HiddenData>,
    );

    // should be null because the checkbox is not toggled
    expect(queryByText(testData)).toBeNull();

    fireEvent.click(getByLabelText(/show/i));

    expect(getByText(testData)).toBeInTheDocument();
    expect(getByText(testData)).toBeDefined(); // same same
  });
});
