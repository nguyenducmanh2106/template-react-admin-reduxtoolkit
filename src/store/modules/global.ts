import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { atom } from 'recoil';

import settings from '@/config/settings';

import { Theme, NavMode } from '@/@types/settings.d';
import { TabNavItem } from '@/@types/router.d';
import { useSelector } from 'react-redux';
import type { RootState } from '../index'

export interface StateType {
  /* 以下是针对所有 Layout 扩展字段 */
  // 左侧展开收起
  collapsed: boolean;
  // 头部固定开启
  headFixed: boolean;
  // 模板主题
  theme: Theme;
  // 左侧侧边固定开启
  leftSiderFixed: boolean;

  /* 以下是针对 UniversalLayout 扩展字段 */
  // tab菜单开启
  tabNavEnable: boolean;
  // 头部tab导航列表
  headTabNavList: TabNavItem[];
  // 菜单栏模式
  navMode: NavMode;
}

const initialState: StateType = {
  collapsed: false,
  headFixed: settings.headFixed,
  theme: settings.theme,
  leftSiderFixed: settings.leftSiderFixed,
  tabNavEnable: settings.tabNavEnable,
  headTabNavList: [],
  navMode: settings.navMode,
};

// export const globalState = atom({
//   key: 'globalState',
//   default: initialState,
// });


const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setGlobal: (_, action: PayloadAction<State>) => {
      return action.payload;
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

export const { setGlobal, setLocale } = globalSlice.actions;
export const globalState = (state: RootState) => state.global

export default globalSlice.reducer;

