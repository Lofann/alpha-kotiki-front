import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import QuestionConstructor from "../../components/question-constructor/question-constructor"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCreatingSurvey, getSurveyQuestions } from "../../store/survey-constructor-data/create-survey.selector"
import { postNewSurvey } from "../../store/api-action"
import Question from "../../components/question/question"
// import { createNewSurvey } from "../../store/survey-constructor-data/create-survey.selectors"


// Компонент главной страницы
export default function SurveyConstructorSecondStep(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  
  const getSurvey = useAppSelector(getCreatingSurvey);
  const getQuestions = useAppSelector(getSurveyQuestions)

  const handleNextButtonClick = (evt: FormEvent<HTMLButtonElement>)=>{

    
    dispatch(postNewSurvey({survey:getSurvey, questions: getQuestions})) 
    return navigate(`/surveys`)
  }

  
  const handlePreviousButtonClick = (evt: FormEvent<HTMLButtonElement>)=>{
    return navigate(`/survey-constructor`)
  }

  
  return (
    <>
      <Helmet>
        <title>Второй этап</title>
      </Helmet>
      <Header/>
      
      <div className="wrapper " >
        <div className="container constructor">
          <h1>Редактор вопросов</h1>
        <QuestionConstructor/>
              <div className="buttons">
                <button type="reset" className="button-return" onClick={handlePreviousButtonClick}>
                  Вернуться
                </button>
                <button type="submit" className="button-next" onClick={handleNextButtonClick}>
                  Сохранить
                </button>
              </div>
      </div>
      </div>

      
    </>
  )
}