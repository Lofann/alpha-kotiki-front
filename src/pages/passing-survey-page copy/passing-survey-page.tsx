import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import { NavLink, useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks/store";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";

export default function PassingSurveyPage() {
  const id = useParams().id
  const survey = useAppSelector((state) => state.surveys.find((survey) => survey.id === id));

  return(
    <>
      <Helmet>
        <title>{`Опрос "${survey?.name}"`}</title>
      </Helmet>
      <Header/>
      <div className="contain-2">
        <main className="main">
          <div className="top">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to={`/${AppRoute.Surveys}/${id}`}>Опросы</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Опрос "{`${survey?.name}`}"
                </li>
              </ol>
            </nav>
            <div className="timer">
              <div>Оставшееся время:</div>
              <div className="time">00:18:59</div>
            </div>
          </div>
          <div className="question-block">
            <ul className="questions-list">
              <li className="question-item active">
                <Link className="question-link" to="#">
                  1
                </Link>
              </li>
              <li className="question-item">
                <Link className="question-link" to="#">
                  2
                </Link>
              </li>
              <li className="question-item">
                <Link className="question-link" to="#">
                  3
                </Link>
              </li>
            </ul>
            <div className="q-and-a">
              <div className="question">Какое молоко вы чаще всего покупаете?</div>
              <div className="instructions">*Выберите один или несколько ответов</div>
              <div className="answers">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheck-1"
                  />
                  <label className="form-check-label" htmlFor="flexCheck-1">
                    Простоквашино
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheck-2"
                  />
                  <label className="form-check-label" htmlFor="flexCheck-2">
                    Домик в деревне
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheck-3"
                  />
                  <label className="form-check-label" htmlFor="flexCheck-3">
                    Кунгурское
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className=" btn btn-dflt btn-return">Назад</button>
            <button className="btn btn-cta">Вперед</button>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "0%" }}
            />
          </div>
        </main>
      </div>
    </>
  )
}