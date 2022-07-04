import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>)
  // find an element with a role of button and ext of 'Change to blue'
  const colorButton = screen.getByRole('button', {name:'Change to blue'})

  //expect the background color to change
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  //onClick
  fireEvent.click(colorButton);

  //expect a background color of blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  //expect the button text to be change to red
  expect(colorButton.textContent).toBe('Change to red');
});

test('intitial conditions',()=> {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})
