import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders the navigation links', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Registered')).toBeInTheDocument();
  });
});
