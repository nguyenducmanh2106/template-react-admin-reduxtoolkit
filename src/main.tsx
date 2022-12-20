import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter /* , HashRouter */ } from 'react-router-dom';

// Register icon sprite
import 'virtual:svg-icons-register';
// 全局css
import '@/assets/css/index.less';
// App
import App from '@/App';
import { Provider } from 'react-redux';
import store from './store';

// 挂载
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
