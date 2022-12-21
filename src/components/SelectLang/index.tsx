import { memo, useCallback, useMemo } from 'react';
import { Dropdown, Menu } from 'antd';
import { i18nLocaleState, setI18nLocale } from '@/store/modules/i18n';
import { setLocale } from '@/utils/i18n';

import IconSvg from '@/components/IconSvg';

import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { I18nKey } from '@/@types/i18n.d';
import { useAppDispatch, useAppSelector } from '../../store';

export interface SelectLangProps {
  className?: string;
}

export default memo(({ className }: SelectLangProps) => {
  const i18nLocale = useAppSelector(i18nLocaleState);
  const dispatch = useAppDispatch()
  const menuItems = useMemo<ItemType[]>(
    () => [
      {
        key: 'zh-CN',
        label: <> Simplified Chinese</>,
        icon: <>🇨🇳 </>,
        disabled: i18nLocale === 'zh-CN',
      },
      {
        key: 'zh-TW',
        label: <> traditional Chinese</>,
        icon: <>🇭🇰 </>,
        disabled: i18nLocale === 'zh-TW',
      },
      {
        key: 'en-US',
        label: <> English</>,
        icon: <>🇺🇸 </>,
        disabled: i18nLocale === 'en-US',
      },
    ],
    [i18nLocale],
  );

  const onMenuClick = useCallback(
    ({ key }: { key: string }) => {
      const lang = key as I18nKey;
      dispatch(setI18nLocale(lang));
      setLocale(lang);
    },
    [i18nLocale, setI18nLocale],
  );
  return (
    <Dropdown className={className} overlay={<Menu onClick={onMenuClick} items={menuItems} />}>
      <span>
        <IconSvg name='language-outline' />
      </span>
    </Dropdown>
  );
});
