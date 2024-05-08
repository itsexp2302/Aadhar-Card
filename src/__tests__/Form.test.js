import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormComponent from '../components/Form';

describe('FormComponent', () => {
  it('renders the form with all input fields', () => {
    render(<FormComponent />);
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date of Birth')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contact Information')).toBeInTheDocument();
  });

  it('submits the form with valid data', () => {
    const mockSubmit = jest.fn();
    render(<FormComponent onSubmit={mockSubmit} />);
    fireEvent.change(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Address'), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByPlaceholderText('Contact Information'), { target: { value: '123-456-7890' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toHaveBeenCalledWith({
      fullName: 'John Doe',
      dob: '1990-01-01',
      address: '123 Main St',
      contact: '123-456-7890'
    });
  });
});
