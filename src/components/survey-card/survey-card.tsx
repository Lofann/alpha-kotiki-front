import SurveyCardProps from "./survey-card.props"
import { useNavigate } from "react-router-dom"
import { AppRoute } from "../../const";

//Компонент первью-карточки опроса
export default function SurveyCard({survey}: SurveyCardProps): JSX.Element {
  const navigate = useNavigate();

  const getDescription = (description: string) => {
    if (description.length > 30) {
      return description.slice(0, 30) + '...';
    }
    return description
  }

  return (
    <div className="card">
      <h2 className="card-title">{survey.name}</h2>
      <div className="card-discripton">
        <p>{getDescription(survey.description)}</p>
      </div>
      <div className="card-params">
        <p>{`${survey.time} минут`}</p>
        <p>{`${survey.price} Р`}</p>
      </div>
      <div className="card-btn">
        <button
          className="btn-get-survey"
          onClick={() => {navigate(`/${AppRoute.Surveys}/${survey.id}`)}}
        >
          Пройти опрос
        </button>
      </div>
    </div>
  )
}
