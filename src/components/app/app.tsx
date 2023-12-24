import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { AppRoute } from '../../const';
import AllSurvey from '../../pages/all-survey-page/all-survey-page';
import AppProps from './app.props';

// Корневой компонент
// Здесь же вся внешняя маршрутизация

export default function App({surveys}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<AllSurvey surveys={surveys}/>}
        />
      </Routes>
    </BrowserRouter>
  )
}
