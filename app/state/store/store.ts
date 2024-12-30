import { configureStore } from '@reduxjs/toolkit';
import CanvasSlicer from '@/app/state/store/Slicer/CanvasSlicer';

export const makeStore = () => {
  return configureStore({
    reducer: {
      Canvas: CanvasSlicer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
