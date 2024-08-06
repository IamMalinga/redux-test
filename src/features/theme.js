import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { color: "" },
    reducers: {
        fontColor: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { fontColor } = themeSlice.actions;

export default themeSlice.reducer;