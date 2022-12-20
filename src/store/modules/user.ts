import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { queryMessage } from '@/services/user';
import { ResponseData } from '@/utils/request';
import { useSelector } from "react-redux";
import type { RootState } from '../index'
export interface CurrentUser {
  id: number;
  name: string;
  avatar: string;
  roles: string[];
}

export const initialState: CurrentUser = {
  id: 0,
  name: '',
  avatar: '',
  roles: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setHost: (state, action: PayloadAction<User | undefined>) => {
      return {
        ...state,
        host: action.payload,
      };
    },
    setOwner: (state, action: PayloadAction<User | undefined>) => {
      return {
        ...state,
        owner: action.payload,
      };
    },
    setUser: (state, action: PayloadAction<User | undefined>) => {
      // return {
      //   ...state,
      //   user: action.payload,
      // };

      return {
        ...action.payload,
      };
    },
    patchUser: (state, action: PayloadAction<Partial<User>>) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        } as User,
      };
    },
  },
});

export const { setHost, setOwner, setUser, patchUser } = userSlice.actions;

export default userSlice.reducer;

export const userState = (state: RootState) => state.user