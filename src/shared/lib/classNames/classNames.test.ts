import { classNames } from "./classNames"

describe('classNames', () => {
    test('Only with first parameter', () => {
        expect(classNames('Button')).toBe('Button')
    })

    test('With additional classes', () => {
        const result = 'Button wide primary'
        expect(classNames('Button', {}, ['wide', 'primary'])).toBe(result)
    })

    test('With additional undefined', () => {
        const result = 'Button'
        expect(classNames('Button', {}, undefined)).toBe(result)
    })

    test('With additional classes and mods', () => {
        const result = 'Button wide primary hovered visible'
        expect(classNames('Button', {
            hovered: true,
            selected: false,
            visible: true
        }, ['wide', 'primary'])).toBe(result)
    })

    test('With additional classes and mods which are undefined', () => {
        const result = 'Button wide primary hovered'
        expect(classNames('Button', {
            hovered: true,
            selected: false,
            visible: undefined
        }, ['wide', 'primary'])).toBe(result)
    })
})