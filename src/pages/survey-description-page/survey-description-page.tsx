import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { AppRoute } from "../../const";
import { getSurvey, getSurveyLoadingStatus } from "../../store/passing-survey-data/passing-survey.selectors";
import { resetAnswers, resetQuestionNumber, setSurvey } from "../../store/action";
import { fetchSurvey } from "../../store/api-action";
import { useEffect } from "react";
import Loader from "../../components/loader/loader";

export default function SurveyDescriptionPage() {
  const id = useParams().id;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetQuestionNumber())
    dispatch(resetAnswers())
    if (id) {
      dispatch(fetchSurvey({id: id}))
    }
  }, [id])
  
  const loadingStatus = useAppSelector(getSurveyLoadingStatus)
  const survey = useAppSelector(getSurvey)

  if (survey) {
    dispatch(setSurvey(survey))
    return(
      <>
        <Helmet>
          <title>{`Опрос "${survey.name}"`}</title>
        </Helmet>
        <Header/>
        <div className="contain-2">
          <main className="main">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to={`/${AppRoute.Surveys}`}>Опросы</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Опрос "{`${survey.name}`}"
                </li>
              </ol>
            </nav>
            {loadingStatus? <Loader/>:
              <>
                <h1 className="page-title-left indentation-page-title">{`${survey.name}`}</h1>
                <p className="survey-description">
                  {`${survey.description}`}
                </p>
                <div className="survey-details">
                  <p className="details-item">
                    <strong>Время: </strong>{`${survey.completionTimeLimit}`} минут
                  </p>
                  <p className="details-item">
                    <strong>Стоимость: </strong>{`${survey.price}`}₽
                  </p>
                  <p className="details-item">
                    <strong>Количество вопросов: </strong>3
                  </p>
                </div>
                <div className="align-right">
                  <button 
                    className="btn btn-cta"
                    onClick={() => navigate(AppRoute.SurveyPassing)}
                    >
                    Начать опрос
                  </button>
                </div>
              </>
            }
          </main>
        </div>
      </>
    )
  }

  return <></>
}