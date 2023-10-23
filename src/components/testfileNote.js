// test for the login components. This is supposed to be in the Login.test.js. This is only a note for learning purpose

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

// Mock function for handling login
const handleLogin = jest.fn();

beforeEach(() => {
  render(<Login onLogin={handleLogin} />);
});

test('Login component renders correctly', () => {
  // Check if the input fields and login button are present
  const usernameInput = screen.getByRole('textbox', { name: /username/i });
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole('button', { name: /login/i });

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});


// instead of testing for the input fields individually, they are grouped here since they are all similar
test('Typing into input fields updates their values', () => {
  // Find the input fields
  const usernameInput = screen.getByRole('textbox', { name: /username/i });
  const passwordInput = screen.getByLabelText(/password/i);

  // Simulate typing into the input fields
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  // Check if the input field values are updated
  expect(usernameInput).toHaveValue('testuser');
  expect(passwordInput).toHaveValue('testpassword');
});

test('Login button click event', () => {
  // Find the login button
  const loginButton = screen.getByRole('button', { name: /login/i });

  // Simulate a click on the login button
  fireEvent.click(loginButton);

  // Check if the handleLogin function was called
  expect(handleLogin).toHaveBeenCalled();
});
