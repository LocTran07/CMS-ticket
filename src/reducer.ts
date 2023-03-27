import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, DocumentData, getDocs } from "firebase/firestore/lite";
import { db } from "./firebase";

// truy cập collection
const citiesCol = collection(db, "users");

interface Intial {
  number: number;
  listPost: DocumentData[];
}

export const { reducer: testReducer, actions: testAction } = createSlice({
  name: "test",
  initialState: {
    number: 2,
    listPost: [],
  } as Intial,
  reducers: {
    tang(state, action) {
      state.number = state.number + action.payload;
    },
    giam(state, action) {
      state.number = state.number - action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.listPost = action.payload;
    });
  },
});
export const getData = createAsyncThunk("test-getData", async (_) => {
  // lấy đoc từ coleection
  const data = await getDocs(citiesCol);
  const data1 = data.docs.map((doc) => doc.data());
  return data1;
});
