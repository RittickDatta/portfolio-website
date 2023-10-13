import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToChecklist,
  removeFromChecklist,
} from "./store/reducers/resumeDataSlice";

function App() {
  const count = useSelector((state: any) => state.resumeData.test);
  const dispatch = useDispatch();
  const handleClick = (add: boolean) => {
    if (add) {
      dispatch(addToChecklist());
    } else {
      dispatch(removeFromChecklist());
    }
  };
  return (
    <div className="App">
      {/* {count}
      <button onClick={() => handleClick(true)}>Add</button>
      <button onClick={() => handleClick(false)}>Subtract</button> */}
    </div>
  );
}

export default App;
