import { createSlice } from "@reduxjs/toolkit";
import { getFilms } from "./films.actions";

const INIT_STATE = {
  //   getOneFilm: null,
  //   categories: [],
  //   loading: false,
  films: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState: INIT_STATE,
  extraReducers: (builder) => {
    builder

      .addCase(getFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilms.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.films = payload?.results;
      });
  },
});
