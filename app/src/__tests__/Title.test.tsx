import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Title from '../components/Title';

afterEach(cleanup);

describe('Tests for title', () => {
  test('<Title />', () => {
    let mainTitle = 'legia';
    let subTitle = 'subtitle';
    const { container, getByTestId } = render(<Title mainTitle={mainTitle} />);

    expect(container.firstChild.className).toBeDefined();
    expect(container.firstChild.className).toBe('mainTitle');
    expect(getByTestId('mainTitle').textContent).toBeDefined();
    expect(getByTestId('mainTitle')).toHaveTextContent(mainTitle);
    expect(getByTestId('cta-btn')).not.toHaveAttribute('disabled');
    expect(getByTestId('cta-btn')).toHaveTextContent('cta button');
    fireEvent.click(getByTestId('cta-btn'));
    expect(getByTestId('cta-btn')).toHaveTextContent('hello');
    fireEvent.click(getByTestId('cta-btn'));
    expect(getByTestId('cta-btn')).toHaveTextContent('cta button');
  });
});
