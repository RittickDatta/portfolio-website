import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToChecklist,
  removeFromChecklist,
} from "./store/reducers/resumeDataSlice";

function App() {
  const count = useSelector((state) => state.resumeData.test);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {count}
      <button onClick={dispatch(addToChecklist())}>Add</button>
      <button onClick={dispatch(addToChecklist())}>Subtract</button>
    </div>
  );
}

export default App;
