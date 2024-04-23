import SurveyCardProps from "./survey-card-props"

export default function SurveyCard({survey}: SurveyCardProps): JSX.Element {
  return(
    <div className="card">
      <div className="title-2">{survey.name}</div>
      <div className="card-info">
        <div className="card-discripton">{survey.description}</div>
        <div className="time-and-price">
          <div>{survey.time}</div>
          <div>{survey.price}₽</div>
        </div>
      </div>
      <div className="card-btn">
        <button className="btn btn-cta">Пройти опрос</button>
      </div>
    </div>
  )
}