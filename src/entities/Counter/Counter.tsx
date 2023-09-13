import { useDispatch, useSelector } from "react-redux"
import Button from "shared/ui/Button/Button"
import { counterActions } from "./model/slice/counterSlice"
import { getCounterValue } from "./model/selectors/getCounterValue/getCounterValue"


const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())    
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1
                data-testid="value-title"
            >Value: {counterValue}</h1>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >Decrement</Button>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >Increment</Button>
        </div>
    )
}

export default Counter