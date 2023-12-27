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
        loading: true
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
        },
        extraReducers: (builder) => {
            builder
              .addCase(fetchMissions.fulfilled, (state, action) => {
                const res = action.payload.map(({ mission_id, mission_name, description }) => {
                  return { mission_id, mission_name, description, reserved: false };
                });
                state.loading = false;
                state.missionList = res;
              })
              .addCase(fetchMissions.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchMissions.rejected, (state) => {
                state.loading = false;
              });
          }
          
    },
    
);


export const { handleReservation }  = missionSlice.actions;

export default missionSlice.reducer;