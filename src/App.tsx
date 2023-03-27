import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppThunkDispatch, RootState } from "./store";
import "./App.css";
import { getData, testAction } from "./reducer";
import MainLayout from "./layout/MainLayout";
import Router from "./Router";

function App() {
  const { number, listPost } = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch<AppThunkDispatch>();
  console.log(listPost);

  // effect
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      {/* {listPost.map((item, index) => (
        <h1 key={index}>
          {item.name} {item.age}
        </h1>
      ))} */}
      <Router></Router>
    </div>
  );
}

export default App;

// let a: string;
// a = "ádasd";

// let b: number;
// b = 8;

// let c: boolean;
// c = true;

// const score: number | string = 1;
// let d: Array<number | string>;
// d = ["ádasd", 2];

// enum SeatChoice {
//   a = 10,
//   b = "string",
// }

// type Props = {
//   name: string;
//   age: number;
// };
// type Props1 = {
//   name: string;
//   age: number;
// };
// type Props2 = Props1 & Props

// interface State {
//   name: string;
//   age: number;
//   handle(a: string): string;
//   handle1: () => string;
// }
// interface State1 {
//   name: string;
//   age: number;
//   handle(a: string): string;
//   handle1: () => string;
// }
// interface State3 extends State, State1  {

// }
