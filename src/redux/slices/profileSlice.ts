import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum ProfileType {
  SubmittedVideos = 'submittedVideos',
  FavoriteVideos = 'favoriteVideos',
}

export interface ProfileState {
  submittedVideos: any[];
  favoriteVideos: any[];
}

const initialState: ProfileState = {
  submittedVideos: [],
  favoriteVideos: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addSubmittedVideo: (state, action: PayloadAction<any[]>) => {
      state.submittedVideos = [...action.payload];
    },
    addFavoriteVideo: (state, action: PayloadAction<any[]>) => {
      state.favoriteVideos = [...action.payload];
    },
    clearUserData: state => {
      state.submittedVideos = [];
      state.favoriteVideos = [];
    },
  },
});

export const {addSubmittedVideo, addFavoriteVideo, clearUserData} =
  profileSlice.actions;

export default profileSlice.reducer;
