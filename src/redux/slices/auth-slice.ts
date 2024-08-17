import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type RefreshToken = string | null;
export interface AuthState {
  token: string | null | undefined;
  userDetails: userDetailsProps | null;
  refreshToken: RefreshToken;
}

export interface userDetailsProps {
  full_name: string;
  email: string;
  number: string;
  aadhaar_number: string;
  password: string;
  profile_photo: null;
  id: number;
  created_date: string;
  modified_date: string;
  company: {
    id: number;
    name: string;
    website: string;
    gstin: string;
  };
  role: {
    id: number;
    role: string;
  };
  watchlist: string[];
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    refreshToken: null,
    userDetails: null,
  } as AuthState,
  reducers: {
    login(state, action: PayloadAction<string | null | undefined>) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
      state.userDetails = null;
    },
    setUserDetails(state, action: PayloadAction<userDetailsProps>) {
      state.userDetails = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export {authSlice};
