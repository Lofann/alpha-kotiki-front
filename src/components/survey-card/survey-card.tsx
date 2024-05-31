import SurveyCardProps from "./survey-card-props"
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../const";

export default function SurveyCard({survey}: SurveyCardProps): JSX.Element {
  const navigate = useNavigate();

  const getDescription = (description: string) => {
    if (description.length > 30) {
      return description.slice(0, 60) + '...';
    }
    return description
  }

  return(
    <div className="card">
      <div className="title-2">{survey.name}</div>
      <div className="card-info">
        <div className="card-discripton">{getDescription(survey.description)}</div>
        <div className="time-and-price">
          <div>{survey.completionTimeLimit} минут</div>
          <div>{survey.price}₽</div>
        </div>
      </div>
      <div className="card-btn">
        <button 
          className="btn btn-cta"
          onClick={() => {navigate(`/${AppRoute.Surveys}/${survey.id}`)}}>
            Пройти опрос
        </button>
      </div>
    </div>
  )
}