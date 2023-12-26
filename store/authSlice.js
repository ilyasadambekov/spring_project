import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        status: false
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            state.status = true
        },
        logOut(state) {
            localStorage.removeItem('token')
            state.user = {}
            state.status = false
        }
    }
})

export const {setUser, logOut} = authSlice.actions

export default authSlice.reducer