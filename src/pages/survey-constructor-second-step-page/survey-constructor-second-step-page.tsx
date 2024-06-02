import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import QuestionConstructor from "../../components/question-constructor/question-constructor"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { FormEvent, useState } from "react"
import Question from "../../components/question/question.props"
import { useNavigate } from "react-router-dom"
import { createNewSurvey } from "../../store/survey-constructor-data/create-survey.selectors"
import { postNewSurvey } from "../../store/api-action"


// Компонент главной страницы
export default function SurveyConstructorSecondStep(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  
  const getSurvey = useAppSelector(createNewSurvey)

  const handleNextButtonClick = (evt: FormEvent<HTMLButtonElement>)=>{

    dispatch(postNewSurvey({survey:getSurvey})) 
    // return navigate(`/survey-constructor-second-step`)
  }

  
  const handlePreviousButtonClick = (evt: FormEvent<HTMLButtonElement>)=>{
    return navigate(`/survey-constructor`)
  }

  const [questions, setQuestuions] = useState<Array<Question>>()
  
  return (
    <>
      <Helmet>
        <title>Второй этап</title>
      </Helmet>
      <Header/>
      <div className="wrapper">
        <QuestionConstructor/>
              <div className="">
                <button type="reset" className="button-return" onClick={handlePreviousButtonClick}>
                  Вернуться
                </button>
                <button type="submit" className="button-next" onClick={handleNextButtonClick}>
                  Сохранить
                </button>
              </div>
      </div>

      asd
    </>
  )
}
