import { Provider } from "react-redux";
import { createReduxStore } from "./config/store";
import { IStateSchema } from "./config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<IStateSchema> 
}

const StoreProvider = ({
    children,
    initialState
}:IStoreProviderProps) => {
    const store = createReduxStore(initialState as IStateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider