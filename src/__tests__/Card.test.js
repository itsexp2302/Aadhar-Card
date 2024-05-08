import React from 'react';
import { render, screen } from '@testing-library/react';
import CardComponent from '../components/Card';

describe('CardComponent', () => {
  it('renders the card with user information', () => {
    const user = { fullName: 'John Doe', dob: '1990-01-01', address: '123 Main St', contact: '123-456-7890' };
    render(<CardComponent user={user} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('1990-01-01')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
  });
});
