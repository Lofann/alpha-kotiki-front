
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AllSurvey from '../../pages/all-survey-page/all-survey-page';
import MainPage from '../../pages/main-page/main-page';
import SurveyConstructorFirstStep from '../../pages/survey-constructor-first-step-page/survey-constructor-first-step-page';
import SurveyDescriptionPage from '../../pages/survey-description-page/survey-description-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import PassingSurveyPage from '../../pages/passing-survey-page/passing-survey-page';
import { useAppDispatch } from '../../hooks/store';
import { getSurveys } from '../../store/action';
import CompletingSurveyPage from '../../pages/main-page/completing-survey-page/completing-survey-page';
import SurveyConstructorSecondStep from '../../pages/survey-constructor-second-step-page/survey-constructor-second-step-page';


// Корневой компонент
// Здесь же вся внешняя маршрутизация
export default function App(): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;
  const dispatch = useAppDispatch()
  dispatch(getSurveys())

  return (
    <HelmetProvider>
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
                  <AllSurvey/>
                </PrivateRoute>
              }
            />
            <Route path=':id'>
              <Route index element={<SurveyDescriptionPage/>}/>
              <Route path={AppRoute.SurveyPassing} element={<PassingSurveyPage/>}/>
              <Route path={AppRoute.SurveyCompleting} element={<CompletingSurveyPage/>}/>
            </Route>
            <Route path=':id' element={<SurveyDescriptionPage/>}/>
          </Route>
          <Route
            path={AppRoute.Сonstructor}
            element={<SurveyConstructorFirstStep/>}
          />
           <Route
            path={AppRoute.СonstructorQuestions}
            element={<SurveyConstructorSecondStep/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
