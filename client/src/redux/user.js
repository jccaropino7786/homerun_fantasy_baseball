import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null
    },
    reducers:{
        functionName: (state) => {
            state.user += 1;
        }
    }
})

export const { functionName } = userSlice.actions

export default userSlice.reducer