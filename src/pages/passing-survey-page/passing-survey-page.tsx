import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import { NavLink, useParams} from "react-router-dom"
import { AppRoute } from "../../const";
import { useEffect } from "react";
import CheckBoxQuestion from "../../components/questions/check-box";
import RadioButtonQuestion from "../../components/questions/radio-button";
import DropDownListQuestion from "../../components/questions/drop-down-list";
import Timer from "../../components/timer/timer";
import NavBarQuestions from "../../components/questions-navbar/navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { resetQuestionNumber, resetAnswers } from "../../store/action";
import ProgressBar from "../../components/progress-bar/progress-bar";
import PassingButtons from "../../components/buttons-group/passing-buttons";

export default function PassingSurveyPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const id = useParams().id

  const questionNumber = useAppSelector((state) => state.question)
  const survey = useAppSelector((state) => state.surveys.find((survey) => survey.id === id));

  const getQuestion = () => {
    if (survey) {
      switch (survey.questions[questionNumber].type) {
        case 'RadioButton':
          return <RadioButtonQuestion currentAnswers={survey.questions[questionNumber].variables} currentQuestionId={survey.questions[questionNumber].id}/>
        case 'Checkbox':
          return <CheckBoxQuestion currentAnswers={survey.questions[questionNumber].variables} currentQuestionId={survey.questions[questionNumber].id}/>
        case 'DropDownList':
          return <DropDownListQuestion currentAnswers={survey.questions[questionNumber].variables} currentQuestionId={survey.questions[questionNumber].id}/>
      }
    }
  }

  useEffect(() => {
    dispatch(resetQuestionNumber())
    dispatch(resetAnswers())
  },[])

  if (survey) {
    return(
      <>
        <Helmet>
          <title>{`Опрос "${survey.name}"`}</title>
        </Helmet>
        <Header/>
        <div className="contain-2">
          <main className="main">
            <div className="top">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to={`/${AppRoute.Surveys}`}>Опросы</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Опрос "{`${survey.name}`}"
                  </li>
                </ol>
              </nav>
              <div className="timer">
                <div>Оставшееся время:</div>
                <div className="time"><Timer minutes={survey.time}></Timer></div>
              </div>
            </div>
            <div className="question-block">
              <NavBarQuestions survey={survey}/>
              <div className="q-and-a">
                <div className="question">{survey.questions[questionNumber].name}</div>
                <div className="instructions">{survey.questions[questionNumber].tooltip}</div>
                <div className="answers">{getQuestion()}</div>
              </div>
            </div>
            <PassingButtons survey={survey}/>
            <ProgressBar survey={survey}/>
          </main>
        </div>
      </>
    )
  }
  
  return <></>
}