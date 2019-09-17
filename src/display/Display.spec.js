import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

test("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Display />);

    expect(getByText(/unlocked|locked/i)).toBeVisible()
    expect(getByText(/open|closed/i)).toBeVisible()
}) 

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const closedDisplay = render(<Display closed={true}/>)
    expect(closedDisplay.getByText(/closed/i)).toBeVisible()

    const openDisplay = render(<Display closed={false}/>)
    expect(openDisplay.getByText(/open/i)).toBeVisible()
})

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const lockedDisplay = render(<Display locked={true}/>)
    expect(lockedDisplay.getByText(/locked/i)).toBeVisible()

    const unlockedDisplay = render(<Display locked={false}/>)
    expect(unlockedDisplay.getByText(/unlocked/i)).toBeVisible()
})

test("when `locked` or `closed` use the `red-led` class", () => {
    const { getByText } = render(<Display locked={true} closed={true} />)
    expect(getByText(/closed/i)).toHaveClass('red-led')
    expect(getByText(/locked/i)).toHaveClass('red-led')
})

test("when `unlocked` or `open` use the `green-led` class", () => {
    const { getByText } = render(<Display locked={false} closed={false} />)
    expect(getByText(/open/i)).toHaveClass('green-led')
    expect(getByText(/unlocked/i)).toHaveClass('green-led')
})