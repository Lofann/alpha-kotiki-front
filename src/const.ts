// Маршруты в приложении
export enum AppRoute {
  Main = '/',
  Login = 'login',
  Сonstructor = 'survey-constructor',
  Surveys = 'surveys',
  SurveyPassing = 'passing',
  MyList = 'my-list',
  Profile = 'profile',
  NotFound = '*',
  СonstructorQuestions = 'survey-constructor-second-step',

}

// Статусы авторизации
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
