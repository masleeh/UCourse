import {fireEvent, screen} from '@testing-library/react'
import componentRender from 'shared/lib/tests/coponentRender/componentRender'
import Counter from './Counter'

describe('Counter', () => {
    test('Gets value from state', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent("10")
    })
    
    test('Increments value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        })
        fireEvent.click(screen.getByTestId("increment-btn"))
        expect(screen.getByTestId('value-title')).toHaveTextContent("11")
    })

    test('Decrements value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        })
        fireEvent.click(screen.getByTestId("decrement-btn"))
        expect(screen.getByTestId('value-title')).toHaveTextContent("9")
    })
})