import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchWrapper from '../components/SearchWrapper';

describe('Search Wrapper', () => {
  test('<SearchWrapper />', () => {
    const { container } = render(<SearchWrapper />);
    expect(screen.getByText('Search:')).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('apa')).not.toBeInTheDocument();

    expect(screen.queryByText(/I am the best/)).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
