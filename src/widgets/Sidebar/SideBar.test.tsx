import {fireEvent, screen} from '@testing-library/react'
import SideBar from './SideBar'
import componentRender from 'shared/lib/tests/coponentRender/componentRender'

describe('Testing Sidebar', () => {
    test('Does exist', () => {
        componentRender(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    
    test('Toggle Sidebar', () => {
        componentRender(<SideBar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})