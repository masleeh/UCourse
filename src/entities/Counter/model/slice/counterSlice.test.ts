import { counterReducer, counterActions } from "./counterSlice"
import { ICounterSchema } from "../types/counterState"

describe('counterSlice', () => {
    test('Increment action', () => {
        const state: ICounterSchema = {
            value: 10
        }
        expect(counterReducer(state as ICounterSchema, counterActions.increment))
            .toEqual({value: 11})
    })

    test('Decrement action', () => {
        const state: ICounterSchema = {
            value: 10
        }
        expect(counterReducer(state as ICounterSchema, counterActions.decrement))
            .toEqual({value: 9})
    })

    test('Should work with empty state', () => {
        expect(counterReducer(undefined as ICounterSchema, counterActions.decrement))
            .toEqual({value: -1})
    })
})