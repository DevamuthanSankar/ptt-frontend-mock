import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: '' as string
}

export const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})

export const {setToken} = authStore.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default authStore.reducer;
