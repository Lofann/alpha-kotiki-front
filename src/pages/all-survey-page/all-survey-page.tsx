import Header from "../../components/header/header";
import SurveyCardsList from "../../components/survey-cards-list/survey-cards-list";
import AllSurveysPageProps from "./all-survey-page.props";

// Страница со всеми опросами

export default function AllSurvey({surveys}: AllSurveysPageProps) :JSX.Element {
  return(
    <>
      <Header/>
      <div className="wrapper">
        <section className="container">
          <main>
            <h1 className="page-title">Доступные опросы</h1>
            <div>
              <div className="search-params">
                <div className="search">
                  <input
                    type="text"
                    className=" search-field"
                    placeholder="Поиск по опросам"
                    required={undefined}
                  />
                  <i
                    className="icon-search search-icon"
                    style={{ fontSize: 24, color: "#757575" }}
                  />
                </div>
                <div className="category">
                  <select className="category-selector">
                    <option>Категория</option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                  </select>
                </div>
              </div>
            </div>
            <SurveyCardsList surveys={surveys}/>
          </main>
        </section>
      </div>
    </>
  );
}