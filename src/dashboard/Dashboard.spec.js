import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'

test("Gate defaults to close: false and locked: false", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
}) 

test("shows the controls and display", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked|locked/i)
    getByText(/open|closed/i)
    getByText(/lock gate|unlock gate/i)
    getByText(/open gate|close gate/i)
}) 