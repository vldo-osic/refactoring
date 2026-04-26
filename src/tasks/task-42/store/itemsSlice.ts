import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../dataService";
import { IRootState } from "../store";

export enum ClientType {
    company = 'company',
    person = 'person',
};

export type Item = {
    type: ClientType;
    id: string;
    name: string;
};

interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: [],
};


export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (_, { getState }) => {
        const state = getState() as IRootState;
        const response = await getData(state);
        const data = await response.json();
        return data.items;
    }
);

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload;
            })
    },
})

export const selectItems = (state: { items: ItemsState }) => state.items.items;

export default itemsSlice.reducer;