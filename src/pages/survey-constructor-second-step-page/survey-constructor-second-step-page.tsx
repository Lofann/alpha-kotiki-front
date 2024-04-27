import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import QuestionConstructor from "../../components/question-constructor/question-constructor"

// Компонент главной страницы
export default function SurveyConstructorSecondStep(): JSX.Element {
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
