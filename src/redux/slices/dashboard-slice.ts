import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface DashboardState {
  reportModal: {status: boolean; id: string; type: string};
  message: string;
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    reportModal: {status: false, id: '', type: ''},
    message: '',
  } as DashboardState,
  reducers: {
    setReportModal(
      state,
      action: PayloadAction<{
        status: boolean;
        id: string;
        type: 'post' | 'feed' | 'comment' | 'reply';
      }>,
    ) {
      state.reportModal = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export {dashboardSlice};
