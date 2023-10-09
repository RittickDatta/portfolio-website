import { createSlice } from "@reduxjs/toolkit";
export const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState: {
    test: 2,
  },
  reducers: {
    addToChecklist: (state) => {
        state.test += 1;
    },
    removeFromChecklist: (state) => {
        state.test -= 1
    },
  },
});

export const { addToChecklist, removeFromChecklist } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
