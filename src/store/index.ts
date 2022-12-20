import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import globalSlice from "./modules/global";
// import userReducer from "./modules/user";
import userSlice from "./modules/user";
import memoReducer from "./modules/memo";
import editorReducer from "./modules/editor";
import shortcutReducer from "./modules/shortcut";
import locationReducer from "./modules/location";
import resourceReducer from "./modules/resource";
import i18nLocaleSlice from "./modules/i18n";
import i18nMessagesSlice from "./modules/i18nMessage";

const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
    i18nLocaleState: i18nLocaleSlice,
    i18nMessagesState: i18nMessagesSlice
    // memo: memoReducer,
    // editor: editorReducer,
    // shortcut: shortcutReducer,
    // location: locationReducer,
    // resource: resourceReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
