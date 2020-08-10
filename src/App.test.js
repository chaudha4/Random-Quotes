import React from 'react';
import { render, fireEvent, findByText } from '@testing-library/react';
import App from './App';


beforeEach(() => {
  //initializeCityDatabase();
  //console.log("---------This runs before each test----------");
});

afterEach(() => {
  //console.log("---------This runs after each test----------");
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Random Quote Generator/i);
  expect(linkElement).toBeInTheDocument();
});

// Use test.each if you keep duplicating the same test with different data. 
// test.each allows you to write the test once and pass data in.
// https://jestjs.io/docs/en/api#testeachtablename-fn-timeout

test.each([
  ["Random Quote Generator"],
  ["Get a new Quote"],
  ["Play"],
  ["Stop"],
])('%s', (arg1) => {
  const { getByText } = render(<App />);
  const re = new RegExp(arg1, "i");
  const linkElement = getByText(re);
  expect(linkElement).toBeInTheDocument();
});


test("Click Button", async () => {
  const { findByText, getByText } = render(<App />);

  // Wait for quote to appear
  //let quote = await findByText(App, /Genius is one percent inspiration and ninety-nine percent perspiration./i);

  fireEvent.click(getByText(/Play/i));

  //quote = await findByText(App, /You can observe a lot just by watching./i);

  //console.log(getByText(/Get a new Quote/i));

});
