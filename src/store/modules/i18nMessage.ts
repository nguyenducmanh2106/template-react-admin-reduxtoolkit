
// 导入 全局自定义 语言
import globalLocales from '@/locales';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index'


const i18nMessagesSlice = createSlice({
  name: "i18nMessagesState",
  initialState: { ...globalLocales },
  reducers: {
    // setGlobalState: (_, action: PayloadAction<State>) => {
    //   return action.payload;
    // },
    // setLocale: (state, action: PayloadAction<Locale>) => {
    //   return {
    //     ...state,
    //     locale: action.payload,
    //   };
    // },
  },
});
export const i18nMessagesState = (state: RootState) => state.i18nMessagesState
export default i18nMessagesSlice.reducer;
