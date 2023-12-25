import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AllSurvey from '../../pages/all-survey-page/all-survey-page';
import MainPage from '../../pages/main-page/main-page';
import AppProps from './app.props';
import PrivateRoute from '../private-route/private-route';

// Корневой компонент
// Здесь же вся внешняя маршрутизация
export default function App({surveys}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route path={AppRoute.Surveys}>
          <Route 
            index element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <AllSurvey surveys={surveys}/>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
