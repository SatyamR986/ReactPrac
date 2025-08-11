import { createSlice } from '@reduxjs/toolkit';

const initialState = { mode: 'light' };

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeMode: (state) => {    
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
});

export const {changeMode} = ThemeSlice.actions;
export default ThemeSlice.reducer;