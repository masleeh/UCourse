import Counter from "./Counter";
import { counterReducer } from "./model/slice/counterSlice";
import { ICounterSchema } from "./model/types/counterState";

export {
    Counter,
    ICounterSchema,
    counterReducer
}