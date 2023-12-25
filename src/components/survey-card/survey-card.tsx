import SurveyCardProps from "./survey-card.props"

// Компонент первью-карточки опроса

export default function SurveyCard({survey}: SurveyCardProps): JSX.Element {
  return (
    <div className="card">
      <h2 className="card-title">{survey.name}</h2>
      <div className="card-discripton">
        <p>{survey.description}</p>
      </div>
      <div className="card-params">
        <p>{`${survey.time} минут`}</p>
        <p>{`${survey.price} Р`}</p>
      </div>
      <div className="card-btn">
        <button className="btn-get-survey">Пройти опрос</button>
      </div>
    </div>
  )
}
