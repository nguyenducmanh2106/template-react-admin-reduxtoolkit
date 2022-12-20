import { Card } from 'antd';
import { useI18n } from '@/hooks/useI18n';
import locales from './locales';
import { useAppSelector } from '@/store/index';

function App() {
  const t = useI18n(locales);
  return (
    <div className='layout-main-conent'>
      <Card>
        <span style={{ fontSize: '35px', color: '#FF0000' }}>↑</span>
        {t('page.custom-breadcrumbs.msg')}
      </Card>
    </div>
  );
}

export default App;
