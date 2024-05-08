import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import EmployeeCard from '@/app/employee/list/employee-card';

describe('EmployeeCard Component', () => {
  const mockProps = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phoneNumber: '1234567890',
    gender: 'M',
    profilePicture: '/images/john.jpg'
  };

  test('renders employee information correctly', () => {
    render(<EmployeeCard {...mockProps} />);
    
    // Check if all the information is rendered correctly
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
  });

  test('renders default profile picture if profile picture is not provided', () => {
    const propsWithoutProfilePicture = { ...mockProps, profilePicture: '' };
    render(<EmployeeCard {...propsWithoutProfilePicture} />);

    // Check if default profile picture is rendered
    expect(screen.getByAltText('Profile Picture')).toHaveAttribute('src', '/images/no-profile.jpg');
  });

  test('renders edit link with correct href', () => {
    render(<EmployeeCard {...mockProps} />);
    
    // Check if edit link is rendered with correct href
    expect(screen.getByRole('link')).toHaveAttribute('href', 'edit/1');
  });

  test('displays correct gender text', () => {
    const femaleProps = { ...mockProps, gender: 'F' };
    render(<EmployeeCard {...femaleProps} />);

    // Check if gender is rendered correctly
    expect(screen.getByText('Female')).toBeInTheDocument();
  });
});
