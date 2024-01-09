import Header from "../../components/header/header";
import SurveyCardsList from "../../components/survey-cards-list/survey-cards-list";
import { SurveyCard } from "../../types/survey-card";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getSurveys } from "../../store/action";
import { ChangeEvent, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// Фильтрация по поиску
const filterBySearch = (searchValue: string, surveys: SurveyCard[]) => {
    if (!searchValue) {
      return surveys
    } else {
      return surveys.filter(({name}) => name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    }
};

// Страница со всеми опросами
export default function AllSurvey() :JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(getSurveys())
  const surveys = useAppSelector((state) => state.surveys)

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
      <Helmet>
        <title>Доступные опросы</title>
      </Helmet>
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
