import Header from "../../components/header/header";
import SurveyCardsList from "../../components/survey-cards-list/survey-cards-list";
import { SurveyCard } from "../../types/survey-card";
import { useAppSelector } from "../../hooks/store";
import { ChangeEvent, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PagginationBar from "../../components/pagination-bar/pagination-bar";
import { getSurveys, getSurveysLoadingStatus } from "../../store/passing-survey-data/passing-survey.selectors";
import Loader from "../../components/loader/loader";

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
  const surveys = useAppSelector(getSurveys)
  const loadingStatus = useAppSelector(getSurveysLoadingStatus)
  const [searchValue, setSearchValue] = useState('');
  const [relevantSurveys, setRelevantSurveys] = useState(surveys);

  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const payload = evt.target.value
    if (payload !== searchValue) {
      setSearchValue(payload);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredSurveys = filterBySearch(searchValue, surveys);
      setRelevantSurveys(filteredSurveys)
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchValue, surveys])

  if (surveys) {
    return(
      <>
        <Helmet>
          <title>Доступные опросы</title>
        </Helmet>
        <Header/>
        <div className="contain-2">
          <main className="main">
            <div className="page-title-center">Доступные опросы</div>
            <div className="search-params">
              <div className="search">
                <i className="icon-search" />
                <input
                  type="text"
                  className=" search-field"
                  placeholder="Поиск по опросам"
                  onChange={handleSearchChange}
                />
              </div>
              <div className="category">
                <select
                  className="form-select category-selector"
                  aria-label="Пример выбора по умолчанию"
                >
                  <option selected={true}>Категория</option>
                  <option value={1}>Научные</option>
                  <option value={2}>Бытовые</option>
                </select>
              </div>
            </div>
            {loadingStatus? <Loader/> : <SurveyCardsList surveys={relevantSurveys}/>}
            {/* <PagginationBar/> */}
          </main>
        </div>
      </>
    );
  }

  return <></>
}
