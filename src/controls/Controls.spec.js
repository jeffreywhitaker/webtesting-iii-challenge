import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Controls from './Controls'
import '@testing-library/jest-dom/extend-expect'

test("Gate cannot be closed or opened if it is locked", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<Controls locked={true} toggleClosed={mock}/>)

    const openButton = getByTestId('toggle-closed')
    fireEvent.click(openButton)
    expect(mock).not.toBeCalled()
}) 

test("Gate can be closed or opened if it is not locked", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<Controls locked={false} toggleClosed={mock}/>)

    const openButton = getByTestId('toggle-closed')
    fireEvent.click(openButton)
    expect(mock).toBeCalled()
}) 

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const { getByTestId } = render(<Controls />)
    const closeButton = getByTestId('toggle-closed')
    const lockButton = getByTestId('toggle-locked')

    expect(closeButton).toHaveTextContent('Close Gate')
    expect(lockButton).toHaveTextContent('Lock Gate')
})

test("the closed toggle button is disabled if the gate is locked", () => {
    const { getByTestId } = render(<Controls locked={true} />)
    const closeButton = getByTestId('toggle-closed')
    expect(closeButton).toHaveAttribute('disabled')

})

test("the locked toggle button is disabled if the gate is open", () => {
    const { getByTestId } = render(<Controls closed={false} />)
    const lockButton = getByTestId('toggle-locked')
    expect(lockButton).toHaveAttribute('disabled')
})