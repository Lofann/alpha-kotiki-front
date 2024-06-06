import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { getSurvey } from "../../store/passing-survey-data/passing-survey.selectors"
import Header from "../../components/header/header"
import { NavLink, useParams } from "react-router-dom"
import { AppRoute } from "../../const"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { fetchSurvey } from "../../store/api-action"

export default function CompletingSurveyPage(): JSX.Element {
  const id = useParams().id
  const dispatch = useAppDispatch()
  const survey = useAppSelector(getSurvey)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      dispatch(fetchSurvey({id: id}))
    }
  },[])

  if (survey) {
    return(
      <>
        <Helmet>
          <title>{`Опрос "${survey.name}"`}</title>
        </Helmet>
        <Header/>
        <div className="contain-2">
          <main className="main">
            <div className="top">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to={`/${AppRoute.Surveys}`}>Опросы</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Опрос "{survey.name}"
                  </li>
                </ol>
              </nav>
            </div>
            <div className="completion-information">
              <div className="page-title-center">
                Опрос <span className="blue">“{survey.name}”</span> успешно пройден!
              </div>
              <div className="payment">Вам начислено {survey.price}₽!</div>
              <button className="btn btn-cta" onClick={() => navigate(`/${AppRoute.Surveys}`)}>Вернуться к опросам</button>
            </div>
          </main>
        </div>
      </>
    )
  }
  
  return <></>
}