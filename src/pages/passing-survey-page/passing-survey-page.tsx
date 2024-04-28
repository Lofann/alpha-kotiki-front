import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import { NavLink, useParams, Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/store";
import { AppRoute } from "../../const";
import { useState } from "react";
import cn from "classnames";
import CheckBoxQuestion from "../../components/questions/check-box";
import RadioButtonQuestion from "../../components/questions/radio-button";
import DropDownListQuestion from "../../components/questions/drop-down-list";
import Timer from "../../components/timer/timer";

export default function PassingSurveyPage(): JSX.Element {
  const id = useParams().id
  const survey = useAppSelector((state) => state.surveys.find((survey) => survey.id === id));
  const [questionNumber, setQuestionNumber] = useState(0)

  const getQuestion = () => {
    switch (survey?.questions[questionNumber].type) {
      case 'RadioButton':
        return <RadioButtonQuestion answers={survey?.questions[questionNumber].variables}/>
      case 'Checkbox':
        return <CheckBoxQuestion answers={survey?.questions[questionNumber].variables}/>
      case 'DropDownList':
        return <DropDownListQuestion answers={survey?.questions[questionNumber].variables}/>
    }
  }

  return(
    <>
      <Helmet>
        <title>{`Опрос "${survey?.name}"`}</title>
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
                  Опрос "{`${survey?.name}`}"
                </li>
              </ol>
            </nav>
            <div className="timer">
              <div>Оставшееся время:</div>
              <div className="time"><Timer minutes={survey?.time as number}></Timer></div>
            </div>
          </div>
          <div className="question-block">
            <ul className="questions-list">
              <li className={cn("question-item", {
                'active': questionNumber === 0
              })}>
                <Link className="question-link" to="#">
                  1
                </Link>
              </li>
              <li className={cn("question-item", {
                'active': questionNumber === 1
              })}>
                <Link className="question-link" to="#">
                  2
                </Link>
              </li>
              <li className={cn("question-item", {
                'active': questionNumber === 2
              })}>
                <Link className="question-link" to="#">
                  3
                </Link>
              </li>
            </ul>
            <div className="q-and-a">
          <div className="question">{survey?.questions[questionNumber].name}</div>
              <div className="instructions">{survey?.questions[questionNumber].tooltip}</div>
              <div className="answers">
                {getQuestion()}
              </div>
            </div>
          </div>
          <div className="buttons">
            <button
              className={cn("btn btn-dflt", {
                'hidden': questionNumber === 0
              })}
             onClick={() => setQuestionNumber(questionNumber - 1)}>Назад</button>
            <button
              className={cn("btn btn-cta", {
                'hidden': survey && questionNumber === survey?.questions.length - 1
              })}
              onClick={() => setQuestionNumber(questionNumber + 1)}>Вперед</button>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "0%" }}
            />
          </div>
        </main>
      </div>
    </>
  )
}