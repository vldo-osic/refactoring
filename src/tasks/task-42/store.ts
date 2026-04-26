import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './store/itemsSlice';

export const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});

export interface IRootState {
    client: {
        id: string,
    },
    items: {
        items: {
            type: ClientTypes;
            id: string;
            name: string;
        }[];
    };
}

export type AppDispatch = typeof store.dispatch;