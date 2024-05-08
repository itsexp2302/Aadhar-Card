import React from 'react';
import { render, screen } from '@testing-library/react';
import MainComponent from '../components/Main';

describe('MainComponent', () => {
  it('renders the main component with navbar and routes', () => {
    render(<MainComponent />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Registered')).toBeInTheDocument();
  });
});
