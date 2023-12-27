import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const dragonapi = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk('spacex/dragons/fetchDragons', async () => {
    const response = await fetch(dragonapi);
    const data = await response.json();
    return data;
});

const dragonsSlice = createSlice({
    name: 'dragons',
    initialState: {
        dragons: [],
        status: null
    },
    reducers: {
        handleDragonReservations: (state, action) => {
            
        }
    },
   
});

export const { handleDragonReservation }  = dragonsSlice.actions;

export default dragonsSlice.reducer;