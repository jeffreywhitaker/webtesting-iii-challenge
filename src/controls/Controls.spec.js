import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Controls from './Controls'
import '@testing-library/jest-dom'

test("Gate cannot be closed or opened if it is locked", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<Controls locked={true} toggleClosed={mock}/>);

    const openButton = getByTestId('toggle-closed')
    fireEvent.click(openButton)
    expect(mock).not.toBeCalled()
}) 

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const { getByTestId } = render(<Controls />)
    const openButton = getByTestId('toggle-closed')
    const lockButton = getByTestId('toggle-locked')

    expect(openButton).toHaveTextContent('Close Gate')
    expect(lockButton).toHaveTextContent('Lock Gate')
})

test("the closed toggle button is disabled if the gate is locked", () => {
    
})

test("the locked toggle button is disabled if the gate is open", () => {
    
})