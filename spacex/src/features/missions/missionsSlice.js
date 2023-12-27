import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';

const missionapi = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('spacex/missions/fetchMissions', async () => {
    const response = await fetch(missionapi);
    const data = await response.json();
    return data;
});

const missionSlice = createSlice({
    name: 'missions',
    initialState: {
        missions: [],
        status: null
    },
    reducers: {
        handleReservations: (state, action) => {
            console.log(action.payload);
                const { id, type } = action.payload;
                const newMissions = current(state).missionList.map((mission) => {
                  if(type === 'join' && id === mission.mission_id) {
                    return { ...mission, reserved: true };
                  }
                  if(type === 'leave' && id === mission.mission_id) {
                    return { ...mission, reserved: false };
                  }
                  return mission;
                });
                state.missionList = newMissions;
              }
        }
    },
    
);


export const { handleReservation }  = missionSlice.actions;

export default missionSlice.reducer;