import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CanvasBgType } from '@/app/types/typeCanvasBg';

const initCanvasState = {
  canvasBgType: 'Solid' as CanvasBgType,
  canvasBgSolid: 'rgba(47, 119, 150, 0.7)' as string,
  canvasBgGradient: '' as String,
  canvasBgImage: '' as String,
  canvasBgColor: 'rgba(47, 119, 150, 0.7)' as string,
};
const CanvasSlicer = createSlice({
  initialState: initCanvasState,
  name: 'Canvas',
  reducers: {
    setCanvasBgType: (state, action: PayloadAction<CanvasBgType>) => {
      state.canvasBgType = action.payload;
    },
    setCanvasBgTypeAsSolid: (state) => {
      state.canvasBgType = 'Solid';
    },
    setCanvasBgTypeAsGradient: (state) => {
      state.canvasBgType = 'Gradient';
    },
    setCanvasBgTypeAsImage: (state) => {
      state.canvasBgType = 'Image';
    },

    setCanvasBgColor: (state, action: PayloadAction<string>) => {
      state.canvasBgColor = action.payload;
    },
    // setCanvasBgSolid: (state) => {
    //   state.canvasBgType = 'Solid';
    // },
    // setCanvasBgGradient: (state) => {
    //   state.canvasBgGradient = 'Gradient';
    // },
    // setCanvasBgImage: (state) => {
    //   state.canvasBgImage = 'Image';
    // },
  },
});

export const {
  setCanvasBgType,
  setCanvasBgTypeAsSolid,
  setCanvasBgTypeAsGradient,
  setCanvasBgTypeAsImage,
  // setCanvasBgSolid,
  // setCanvasBgGradient,
  // setCanvasBgImage,
  setCanvasBgColor,
} = CanvasSlicer.actions;
export default CanvasSlicer.reducer;
