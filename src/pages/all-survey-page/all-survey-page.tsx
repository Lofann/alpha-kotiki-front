import Header from "../../components/header/header";
import SurveyCardsList from "../../components/survey-cards-list/survey-cards-list";
import { SurveyCard } from "../../types/survey-card";
import AllSurveysPageProps from "./all-survey-page.props";
import { ChangeEvent, useState, useEffect } from "react";

// Фильтрация по поиску
const filterBySearch = (searchValue: string, surveys: SurveyCard[]) => {
    if (!searchValue) {
      return surveys
    } else {
      return surveys.filter(({name}) => name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    }
};

// Страница со всеми опросами
export default function AllSurvey({surveys}: AllSurveysPageProps) :JSX.Element {
  // Состояние поиска и функция для обновления
  const [searchValue, setSearchValue] = useState('');
  // Состояние списка с опросами, соответствующими поиску
  const [relevantSurveys, setRelevantSurveys] = useState(surveys);

  // Обработчик изменений поля поиска
  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const payload = evt.target.value
    if (payload !== searchValue) {
      setSearchValue(payload);
    }
  };

  // Хук для изменения relevantSurveys при изменении значения поиска
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredSurveys = filterBySearch(searchValue, surveys);
      setRelevantSurveys(filteredSurveys)
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchValue])

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
                    className="search-field"
                    placeholder="Поиск по опросам"
                    onChange={handleSearchChange}
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
            <SurveyCardsList surveys={relevantSurveys}/>
          </main>
        </section>
      </div>
    </>
  );
}
