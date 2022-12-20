import { memo, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { antdMessageState, i18nLocaleState } from '@/store/modules/i18n';
import { setHtmlLang } from '@/utils/i18n';
import Routes from '@/config/routes';
import { useAppSelector } from '@/store/index';

export default memo(() => {


  const i18nLocale = useAppSelector(i18nLocaleState);
  const antdMessage = useAppSelector(antdMessageState);

  useEffect(() => {
    setHtmlLang(i18nLocale);
  }, []);

  return (
    <ConfigProvider locale={antdMessage}>
      <Routes />
    </ConfigProvider>
  );
});
