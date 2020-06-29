import React from 'react';
import { render, getByLabelText} from "@testing-library/react";
import App from './App';

test('title should not be empty',()=>{
  const title = document.querySelector('nav-item');
  console.log(title);
  expect(title).toBeDefined();
});
describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

