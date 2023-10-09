import { configureStore } from "@reduxjs/toolkit";
import resumeDataReducer from './reducers/resumeDataSlice';
export default configureStore({
    reducer: {
        resumeData: resumeDataReducer
    }
})