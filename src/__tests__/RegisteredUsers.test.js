import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisteredComponent from '../components/RegisteredUsers';

describe('RegisteredComponent', () => {
  it('renders the registered users list', () => {
    const registeredUsers = [
      { fullName: 'John Doe', dob: '1990-01-01', address: '123 Main St', contact: '123-456-7890' },
      { fullName: 'Jane Smith', dob: '1995-02-15', address: '456 Elm St', contact: '456-789-0123' }
    ];
    render(<RegisteredComponent registeredUsers={registeredUsers} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
