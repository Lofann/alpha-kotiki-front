import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks/store";

export default function SurveyDescriptionPage() {
  const id = useParams().id;
  const survey = useAppSelector((state) => state.surveys.find((survey) => survey.id === id));

  return(
    <>
      <Helmet>
        <title>{`Опрос "${survey?.name}"`}</title>
      </Helmet>
      <Header/>
      <div className="wrapper">
        <section className="container">
          <main>
            <div className="flexbox">
              <ul className="breadcrumbs">
                <li className="breadcrumbs-item">Опросы</li>
                <li className="breadcrumbs-item">/</li>
                <li className="breadcrumbs-item">{`Опрос "${survey?.name}"`}</li>
              </ul>
              <i className="icon-arrows-left" />
              <div className="subflexbox">
                <h1 className="survey-section">{survey?.name}</h1>
                <p className="survey-section survey-description">{survey?.description}</p>
              </div>
              <div className="subflexbox">
                <p className="survey-section survey-details">
                  <b>Время: </b>{survey?.time}
                </p>
                <p className="survey-section survey-details">
                  <b>Стоимость: </b>{survey?.price}₽
                </p>
                <p className="survey-section survey-details">
                  <b>Количество вопросов: </b>3
                </p>
              </div>
              <div className="align-right">
                <button className="button-next">Начать опрос</button>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  )
}