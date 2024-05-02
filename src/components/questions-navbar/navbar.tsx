import { SurveyCard } from "../../types/survey-card";
import NavItem from "./nav-item";

type NavBarQuestionsProps = {
  survey: SurveyCard
}

export default function NavBarQuestions({survey}: NavBarQuestionsProps): JSX.Element {
  return (
    <ul className="questions-list">
      {survey.questions.map((question,index) => <NavItem key={index} index={index}/>)}
  </ul>
  )
}