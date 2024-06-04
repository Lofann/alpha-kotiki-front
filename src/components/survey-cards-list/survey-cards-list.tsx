import SurveyCardsListProps from "./survey-cards-list.props"
import SurveyCard from "../survey-card/survey-card"

// Компонент, содержащий маленькие карточки с опросами
// На вход получает массив с опросами

export default function SurveyCardsList({surveys}: SurveyCardsListProps): JSX.Element {
  return (
    <div className="survey-cards">
      {surveys.map((survey) => (
        <SurveyCard key={survey.id} survey={survey}/>
      ))}
    </div>
  )
}
