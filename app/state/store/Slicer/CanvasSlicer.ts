import { MutableRefObject, useRef } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DemoTextBoxValue } from '@/app/constants/DemoTextBoxValue';
import { TextBoxType } from '@/app/state/context/types/textBox';
import { CanvasBgType } from '@/app/state/context/types/typeCanvasBg';

const initCanvasState = {
  canvasBgType: 'Solid' as CanvasBgType,
  // canvasBgSolid: 'rgba(47, 119, 150, 0.7)' as string,
  // canvasBgGradient: '' as String,
  // canvasBgImage: '' as String,
  canvasBgColor: '#f76707' as string,
  exportWidth: 900,
  exportHeight: 900,
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
    setExportWidth: (state, action: PayloadAction<number>) => {
      state.exportWidth = action.payload;
      console.log(state.exportHeight);
    },
    setExportHeight: (state, action: PayloadAction<number>) => {
      state.exportHeight = action.payload;
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
  setExportWidth,
  setExportHeight,
  // setCanvasBgSolid,
  // setCanvasBgGradient,
  // setCanvasBgImage,
  setCanvasBgColor,
} = CanvasSlicer.actions;
export default CanvasSlicer.reducer;
