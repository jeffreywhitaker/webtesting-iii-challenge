import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'
import '@testing-library/jest-dom/extend-expect'

test("Gate defaults to close: false and locked: false", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/unlocked/i)).toBeVisible()
    expect(getByText(/open/i)).toBeVisible()
}) 

test("shows the controls and display", () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText(/unlocked|locked/i)).toBeVisible()
    expect(getByText(/open|closed/i)).toBeVisible()
    expect(getByText(/lock gate|unlock gate/i)).toBeVisible()
    expect(getByText(/open gate|close gate/i)).toBeVisible()
}) 