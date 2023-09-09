import Button from "./Button"
import {render, screen} from '@testing-library/react'

describe('Button UI', () => {
    test('Button render', () => {
        render(<Button>Text</Button>)
        expect(screen.getByText("Text")).toBeInTheDocument()
    })
})