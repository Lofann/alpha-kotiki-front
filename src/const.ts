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
}

// Статусы авторизации
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
  Creating = 'CREATING-SURVEY',
  Passing = 'PASSING-SURVEY'
}