import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import QuestionConstructor from "../../components/question-constructor/question-constructor"
import { useAppDispatch } from "../../hooks/store"
import { useState } from "react"
import Question from "../../components/question/question.props"

// Компонент главной страницы
export default function SurveyConstructorSecondStep(): JSX.Element {
  const dispatch = useAppDispatch()

  const [questions, setQuestuions] = useState<Array<Question>>()
  
  return (
    <>
      <Helmet>
        <title>Второй этап</title>
      </Helmet>
      <Header/>
      <div className="wrapper">
        <QuestionConstructor/>
      </div>
      asd
    </>
  )
}
