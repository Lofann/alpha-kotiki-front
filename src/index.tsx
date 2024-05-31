import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchSurveysAction } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchSurveysAction())

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
