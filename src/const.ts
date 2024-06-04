// Маршруты в приложении
export enum AppRoute {
  Main = '/',
  Login = 'login',
  Сonstructor = 'survey-constructor',
  Surveys = 'surveys',
  SurveyPassing = 'survey-passing',
  MyList = 'my-list',
  Profile = 'profile',
  NotFound = '*',
  SurveyCompleting = 'survey-completing',
  СonstructorQuestions = 'survey-constructor-second-step',


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

export enum APIRoute {
  Surveys = '/Surveys',
  PostAnswers = '/post-answers'
  CreateSurveys = '/Surveys/create'
}