import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import AppProps from './components/app/app.props';
import { surveys } from './mocks/surveys';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appData: AppProps = {
  surveys: surveys,
}

root.render(
  <React.StrictMode>
    <App surveys={appData.surveys}/>
  </React.StrictMode>
);
