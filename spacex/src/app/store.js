import {configureStore} from '@reduxjs/toolkit';
import missions from '../features/missions/missionsSlice';
import dragons from '../features/dragons/dragonsSlice';

export const store = configureStore({
    reducer: {
        missions,
        dragons
    }
});

export default store;