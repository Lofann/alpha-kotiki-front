import Header from "../../components/header/header"
import { FormEvent, useRef, useState } from "react"
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"

//Компонент с созданием опроса(описание)
export default function SurveyConstructorFirstStep(): JSX.Element {
  //В рефах состояния всех полей для ввода, кроме checkbox и radiobutton - они в стейтах
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const audienceRef = useRef<HTMLInputElement>(null);
  const [audienceOfMen, setAudienceOfMen] = useState(false);
  const [audienceOfWomen, setAudienceOfWomen] = useState(false);
  const [isPopular, setIsPopular] = useState(false);

  const navigate = useNavigate();
  
  //Отправка формы
  const handleNextButtonClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    // логи для демонстрации, пока нет хранилища
    console.log('State')
    console.log(`Название: ${nameRef.current?.value}`)
    console.log(`Описание: ${descriptionRef.current?.value}`)
    console.log(`Цена: ${priceRef.current?.value}`);
    console.log(`Время: ${timeRef.current?.value}`);
    console.log(`Дата окончания: ${dateRef.current?.value}`);
    console.log(`Целевая аудитория: ${audienceOfMen? 'Мужчины': ''} ${audienceOfWomen? 'Женщины': ''}`);
    console.log(`Вывести в популярное?: ${isPopular? 'Да': 'Нет'}`);
    // диспатч в хранилище
    // редирект на второй этап
    return navigate(`/survey-constructor-second-step`);
  }

  return (
    <>
      <Helmet>
        <title>Создание опроса</title>
      </Helmet>
      <Header/>
      <div className="wrapper">
        <section className="container">
          <main>
            <ul className="breadcrumbs">
              <li className="breadcrumbs-item">Личный кабинет</li>
              <li className="breadcrumbs-item">/</li>
              <li className="breadcrumbs-item">Создать новый опрос</li>
              <li className="breadcrumbs-item">/</li>
              <li className="breadcrumbs-item">Редактор вопросов</li>
            </ul>
            <h1>Создание нового опроса</h1>
            <h2>Заполняем основную информацию</h2>
            <form className="survey-constructor">
              <div className="row">
                <div className="col">
                  <div className="survey-name">
                    <div>
                      <label>
                        Название<span className="required-field">*</span>
                      </label>
                    </div>
                    <div>
                      <input
                        ref={nameRef}
                        type="text"
                        className="field name-field"
                        placeholder="Введите название"
                        required={true}
                        defaultValue={""}
                      />
                      <p className="required-field memo">
                        Поля, отмеченные знаком * , обязательны для заполнения{" "}
                      </p>
                    </div>
                  </div>
                  <div className="survey-description">
                    <div>
                      <label>Описание</label>
                    </div>
                    <div>
                      <textarea
                        ref={descriptionRef}
                        className="field description-field"
                        placeholder="Введите описание"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="survey-price">
                    <div>
                      <label>
                        Стоимость<span className="required-field">*</span>
                      </label>
                    </div>
                    <div>
                      <input
                        ref={priceRef}
                        type="number"
                        className="field price-field"
                        placeholder="Введите стоимость в рублях"
                        required={true}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="survey-time">
                    <div>
                      <label>
                        Длительность опроса<span className="required-field">*</span>
                      </label>
                    </div>
                    <div>
                      <input
                        ref={timeRef}
                        type="time"
                        className="field time-field"
                        placeholder="Длительность опроса"
                        required={true}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="survey-date">
                  <label>
                    Дата окончания опроса<span className="required-field">*</span>
                  </label>
                </div>
                <div>
                  <input
                    ref={dateRef}
                    type="date"
                    className="field date-field"
                    required={true}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div>
                <div className="survey-audience">
                  <label>
                    Аудитория<span className="required-field">*</span>
                  </label>
                </div>
                <div>
                  <label className="audience-field">
                    <input
                      className="audience-field real-checkbox"
                      type="checkbox"
                      defaultValue="audience"
                      value={""}
                      onClick={() => {setAudienceOfMen(!audienceOfMen)}}
                    />
                    <span className="custom-checkbox" />
                    Мужчины
                  </label>
                  <br />
                  <label className="audience-field">
                    <input
                      ref={audienceRef}
                      className="audience-field real-checkbox"
                      type="checkbox"
                      defaultValue="audience"
                      value={""}
                      onClick={() => {setAudienceOfWomen(!audienceOfWomen)}}
                    />
                    <span className="custom-checkbox" />
                    Женщины
                  </label>
                </div>
              </div>
              <div>
                <div className="survey-popularity">
                  <label>
                    Вывести опрос в 
                    <label style={{ color: "#005bff" }}> "Популярное"</label>?
                    <span className="required-field">*</span>
                  </label>
                </div>
                <div>
                  <label className="popularity-field">
                    <input
                      className="real-radio"
                      name="popularity"
                      type="radio"
                      defaultValue="is-popular"
                      value={""}
                      onClick={() => setIsPopular(!isPopular)}
                    />
                    <span className="custom-radio" />
                    Да
                  </label>
                  <br />
                  <label className="popularity-field">
                    <input
                      className="real-radio"
                      name="popularity"
                      type="radio"
                      defaultValue="is-not-popular"
                      value={""}
                      onClick={() => setIsPopular(!isPopular)}
                    />
                    <span className="custom-radio" />
                    Нет
                  </label>
                </div>
              </div>
              <div>
                <div className="survey-img">
                  <label>Иконка для опроса</label>
                  <div className="img-field">
                    <div className="custom-img-field">
                      <div className="img-info">Перетащите фото сюда</div>
                    </div>
                    <input
                      className="real-img-field"
                      type="file"
                      defaultValue="iconImg"
                      value={""}
                    />
                    <div className="another-option">
                      <i className="icon-img" />
                      <div>Выберите фото</div>
                    </div>
                    <div className="or-block">или</div>
                    <div className="another-img-field">
                      <div className="text">Вставьте фото или URL</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="survey-buttons">
                <button type="reset" className="button-return">
                  Вернуться
                </button>
                <button type="submit" className="button-next" onClick={handleNextButtonClick}>
                  Далее
                </button>
              </div>
            </form>
          </main>
        </section>
      </div>
    </>
  )
}
