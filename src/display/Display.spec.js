import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Display from './Display'

test("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Display />);

    getByText(/unlocked|locked/i)
    getByText(/open|closed/i)
}) 

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const { getByText } = render(<Display closed={true}/>)
    getByText(/closed/i)

})

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {

})

test("when `locked` or `closed` use the `red-led` class", () => {
    
})

test("when `unlocked` or `open` use the `green-led` class", () => {
    
})