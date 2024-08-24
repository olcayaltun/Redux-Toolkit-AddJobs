import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    deleteJob: (state, { payload }) => {
      // Renamed from `delete` to `deleteJob`
      state.jobs = state.jobs.filter((i) => i.id !== payload);
    },
    addJob: (state, { payload }) => {
      state.jobs.push(payload);
    },
  },
});

export const { setJobs, setLoading, setError, deleteJob, addJob } =
  jobSlice.actions; // Use the renamed action here
export default jobSlice.reducer;
