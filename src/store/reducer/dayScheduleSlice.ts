import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/api/index';
import { Schedule } from '@/types/schedule';

export interface DayScheduleState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
}

const initialState: DayScheduleState = {
  schedules: [],
  loading: false,
  error: null,
};

export const fetchSchedules = createAsyncThunk('schedules/fetchSchedules', async () => {
  const querySnapshot = await getDocs(collection(db, 'Schedule'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Schedule[];
});

const scheduleSlice = createSlice({
  name: 'Schedule',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        state.loading = false;
        state.schedules = action.payload;
      })
      .addCase(fetchSchedules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch schedules';
      });
  },
});

export default scheduleSlice.reducer;
