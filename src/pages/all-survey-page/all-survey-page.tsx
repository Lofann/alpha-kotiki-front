import Header from "../../components/header/header";
import SurveyCardsList from "../../components/survey-cards-list/survey-cards-list";
import { SurveyCard } from "../../types/survey-card";
import { useAppSelector } from "../../hooks/store";
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
  const surveys = useAppSelector((state) => state.surveys)
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
  }, [searchValue])

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
            <SurveyCardsList surveys={relevantSurveys}/>
            <div className="pagination-bar">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Предыдущая">
                      <span aria-hidden="true">
                        <i className="icon-arrows-left" />
                      </span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Следующая">
                      <span aria-hidden="true">
                        <i className="icon-arrows-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </main>
        </div>
      </>
    );
  }

  return <></>
}
