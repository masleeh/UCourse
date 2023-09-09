import {fireEvent, screen} from '@testing-library/react'
import SideBar from './SideBar'
import renderWithTranslation from 'shared/lib/tests/renderWithTranslations/renderWithTranslation'

describe('Testing Sidebar', () => {
    test('Does exist', () => {
        renderWithTranslation(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    
    test('Toggle Sidebar', () => {
        renderWithTranslation(<SideBar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})