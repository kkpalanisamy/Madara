import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'test-utils'
import { buildUser } from 'utils/generators'
import { Home } from '.'

test('should not allow name to be shorter than 2 characters', () => {
  const newUser = buildUser()
  render(<Home />)

  expect(
    screen.queryByRole('alert', {
      name: /Name must be at least two characters long./i,
    })
  ).not.toBeInTheDocument()

  userEvent.type(screen.getByLabelText(/name/i), 'l')
  userEvent.type(screen.getByLabelText(/email/i), newUser.email)
  userEvent.type(screen.getByLabelText(/password/i), newUser.password)

  userEvent.click(screen.getByRole('button', { name: /sign up/i }))

  expect(
    screen.getByRole('alert', {
      name: /Name must be at least two characters long./i,
    })
  ).toBeInTheDocument()
})

test('should not allow invalid emails', () => {
  const newUser = buildUser()
  render(<Home />)

  expect(
    screen.queryByRole('alert', { name: /Email is not valid./i })
  ).not.toBeInTheDocument()

  userEvent.type(screen.getByLabelText(/name/i), newUser.name)
  userEvent.type(screen.getByLabelText(/email/i), 'blah')
  userEvent.type(screen.getByLabelText(/password/i), newUser.password)

  userEvent.click(screen.getByRole('button', { name: /sign up/i }))

  expect(
    screen.getByRole('alert', { name: /Email is not valid./i })
  ).toBeInTheDocument()
})

test('should not allow passwords shorter than 6 characters', () => {
  const newUser = buildUser()
  render(<Home />)

  expect(
    screen.queryByRole('alert', {
      name: /Password must be at least 6 characters long./i,
    })
  ).not.toBeInTheDocument()

  userEvent.type(screen.getByLabelText(/name/i), newUser.name)
  userEvent.type(screen.getByLabelText(/email/i), newUser.email)
  userEvent.type(screen.getByLabelText(/password/i), 'blah')

  userEvent.click(screen.getByRole('button', { name: /sign up/i }))

  expect(
    screen.getByRole('alert', {
      name: /Password must be at least 6 characters long./i,
    })
  ).toBeInTheDocument()
})
