import { createAsyncThunk } from "@reduxjs/toolkit";
import { APII } from "../../helpers/consts";
import { $axios } from "../../helpers/axios";
import axios from "axios";

export const getFilms = createAsyncThunk("films/getFilms", async () => {
  try {
    // console.log("hello");
    const { data } = await axios.get("/api/v1/films");
    return data;
  } catch (error) {
    // console.log(error);
  }
});
