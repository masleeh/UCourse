import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../../../../entities/Counter";
import { IStateSchema } from "./StateSchema";
import { userReducer } from "../../../../entities/User";

export const createReduxStore = (initialState?: IStateSchema) => {
    const reducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<IStateSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}