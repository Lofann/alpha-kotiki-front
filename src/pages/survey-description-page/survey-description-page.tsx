import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/store";
import { AppRoute } from "../../const";

export default function SurveyDescriptionPage() {
  const id = useParams().id;
  const survey = useAppSelector((state) => state.surveys.find((survey) => survey.id === id));
  const navigate = useNavigate();

  return(
    <>
      <Helmet>
        <title>{`Опрос "${survey?.name}"`}</title>
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
                Опрос "Молоко"
              </li>
            </ol>
          </nav>
          <h1 className="page-title-left indentation-page-title">Молоко</h1>
          <p className="survey-description">
            Добро пожаловать! Этот опрос призван изучить предпочтения и привычки
            потребления молока среди населения. Молоко является важным источником
            питательных веществ, таких как кальций и белок, и широко используется в
            множестве блюд и напитков. Мы заинтересованы в том, как часто вы
            употребляете молоко, какой вид молока предпочитаете (обычное,
            обезжиренное, соевое и т. д.), а также в ваших привычках по употреблению
            молочной продукции в целом. Нам важно понять, какие факторы влияют на ваши
            предпочтения и восприятие молока. Пожалуйста, уделите несколько минут,
            чтобы ответить на вопросы этого опроса и помочь нам получить ценную
            информацию. Ваши ответы помогут нам лучше понять предпочтения и
            потребности наших потребителей и развивать более релевантные продукты и
            услуги. Спасибо за участие!
          </p>
          <div className="survey-details">
            <p className="details-item">
              <strong>Время: </strong>19 минут
            </p>
            <p className="details-item">
              <strong>Стоимость: </strong>100₽
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
        </main>
      </div>
    </>
  )
}