import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from '@/store/reducer/authSlice';
import dayScheduleSlice from '@/store/reducer/dayScheduleSlice';

// 여러 리듀서 결합
const rootReducer = combineReducers({
  auth: authSlice,
  daySchedule: dayScheduleSlice,
});

// 스토어 구성
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
