import { i18nLocaleState } from "../store/modules/i18n";
import { i18nMessagesState } from "../store/modules/i18nMessage";
import { useAppSelector } from '@/store/index';
import { I18n, I18nKey } from '@/@types/i18n.d';

/**
* Title: Custom hook thực hiện lấy về nội dung theo ngôn ngữ
* Created by: manhnd1
* Created date: //2022
*/
export const useI18n = (locales: I18n) => {
  // const i18nLocale = state.i18nLocaleState;
  const i18nLocale = useAppSelector(i18nLocaleState);
  const i18nMessages = useAppSelector(i18nMessagesState);
  const i18nMessage = i18nMessages[i18nLocale] || {};
  const locale = locales[i18nLocale] || {};
  const t = (key: string): string => i18nMessage[key] || locale[key] || key;
  return t;
}