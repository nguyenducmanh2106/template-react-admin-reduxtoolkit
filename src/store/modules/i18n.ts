import { atom, selector, selectorFamily } from 'recoil';
import { getLocale, defaultLang } from '@/utils/i18n';
import { I18n, I18nKey } from '@/@types/i18n.d';

// 导入 全局自定义 语言
import globalLocales from '@/locales';

// 导入 antd 语言
import zhCN from 'antd/es/locale/zh_CN';
import zhTW from 'antd/es/locale/zh_TW';
import enUS from 'antd/es/locale/en_US';
import { useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index'
// antd 语言包
export const antdMessages: { [key in I18nKey]: any } = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en-US': enUS,
};

// 当前的语言
const sysLocale = getLocale();
// export const i18nLocaleState = atom<I18nKey>({
//   key: 'i18nLocaleState',
//   default: antdMessages[sysLocale] ? sysLocale : defaultLang,
// });

const i18nLocaleSlice = createSlice({
  name: "i18nLocaleState",
  initialState: antdMessages[sysLocale] ? sysLocale : defaultLang,
  reducers: {
    // setGlobalState: (_, action: PayloadAction<State>) => {
    //   return action.payload;
    // },
    setI18nLocale: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});
export default i18nLocaleSlice.reducer;
export const { setI18nLocale } = i18nLocaleSlice.actions;


// antd 对应当前语言的内容
// export const antdMessageState = selector({
//   key: 'antdMessageState',
//   get: ({ get }) => antdMessages[get(i18nLocaleState)] || antdMessages['zh-CN'],
// });
export const antdMessageState = (state: RootState) => antdMessages[state.i18nLocaleState] || antdMessages['zh-CN']

export const i18nLocaleState = (state: RootState) => state.i18nLocaleState

// 自定义语言 对应当前语言的内容
// export const useI18n = selectorFamily({
//   key: 'useI18n',
//   get:
//     (locales: I18n) =>
//       ({ get }) => {
//         const i18nLocale = get(i18nLocaleState);
//         const i18nMessage = get(i18nMessagesState)[i18nLocale] || {};
//         const locale = locales[i18nLocale] || {};

//         return (key: string) => i18nMessage[key] || locale[key] || key;
//       },
// });

