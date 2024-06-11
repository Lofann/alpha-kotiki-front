import Header from "../../components/header/header"
import { FormEvent, useRef, useState } from "react"
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { saveNewSurvey } from "../../store/action";
import { Type } from "typescript";
import { SurveyPost } from "../../types/survey-post";
import { getCreatingSurvey } from "../../store/survey-constructor-data/create-survey.selector";
// import { setCompletionTimeLimitSurvey, setDescriptionSurvey, setIsLimitedCompletionTimeSurvey, setIsLimitedPublicationTimeSurvey, setNameSurvey, setPriceSurvey, setPublicationTimeLimitSurvey, setUsagesLimitSurvey } from "../../store/survey-constructor-data/create-survey.selectors";

//Компонент с созданием опроса(описание)
export default function SurveyConstructorFirstStep(): JSX.Element {
  //В рефах состояния всех полей для ввода, кроме checkbox и radiobutton - они в стейтах
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const usagesLimitRef = useRef<HTMLInputElement>(null);
  // const isLimitedCompletionTimeRef = useRef<HTMLInputElement>(null);
  const completionTimeLimitRef = useRef<HTMLInputElement>(null);
  const [isLimitedCompletionTimeRef, setIsLimitedCompletionTimeRef] = useState(false);
  const [isLimitedUsagesRef, setIsLimitedUsagesRef] = useState(false);

  // const [audienceOfWomen, setAudienceOfWomen] = useState(false);
  // const [isPopular, setIsPopular] = useState(false);

  const navigate = useNavigate();

  const normalizeStringData = (data: React.RefObject<HTMLInputElement>) => {
    return data.current?.value === undefined ? '' : data.current?.value
  }

  const normalizeTextData = (data: React.RefObject<HTMLTextAreaElement>) => {
    return data.current?.value === undefined ? '' : data.current?.value
  }

  const normalizeNumberData = (data: React.RefObject<HTMLInputElement>): number => {
    return data.current?.value === undefined ? 0 : data.current?.valueAsNumber
  }

  const validateTimeLimit = (data: React.RefObject<HTMLInputElement>): boolean => {
    return data.current?.valueAsDate !== undefined
  }

  const normalizeTimeLimit = (data: React.RefObject<HTMLInputElement>):  undefined | string => {
    return data.current?.valueAsDate === undefined ? new Date().toISOString() : data.current?.valueAsDate?.toISOString()
  }

  //Отправка формы
  const handleNextButtonClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault()

    let data: SurveyPost = {
      name: normalizeStringData(nameRef),
      creatorId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      description: normalizeTextData(descriptionRef),
      price: normalizeNumberData(priceRef),
      isLimitedPublicationTime: true,
      publicationTimeLimit: normalizeTimeLimit(dateRef),
      usagesLimit: normalizeNumberData(usagesLimitRef),
      isLimitedCompletionTime: isLimitedCompletionTimeRef,
      completionTimeLimit: normalizeNumberData(completionTimeLimitRef),
      isLimitedUsages: isLimitedUsagesRef
    }
    dispatch(saveNewSurvey(data))

    // логи для демонстрации, пока нет хранилища
    console.log('State')
    console.log(`Название: ${nameRef.current?.value}`)
    console.log(`Описание: ${descriptionRef.current?.value}`)
    console.log(`Цена: ${priceRef.current?.value}`);
    console.log(`Время: ${timeRef.current?.value}`);
    console.log(`Дата окончания: ${dateRef.current?.value}`);
    // console.log(`Целевая аудитория: ${audienceOfMen ? 'Мужчины' : ''} ${audienceOfWomen ? 'Женщины' : ''}`);
    // console.log(`Вывести в популярное?: ${isPopular ? 'Да' : 'Нет'}`);
    // диспатч в хранилище
    // редирект на второй этап
    return navigate(`/survey-constructor-second-step`);
  }

  const dispatch = useAppDispatch()
  const newSurvey = useAppSelector(getCreatingSurvey)



  return (
    <>
      <Helmet>
        <title>Создание опроса</title>
      </Helmet>
      <Header />
      <div className="wrapper ">
        <section className="container constructor">
          <main>
  
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
                        defaultValue={newSurvey?.name}
                        onChange={e => e}
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
                        defaultValue={newSurvey?.description}
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
                        defaultValue={newSurvey?.price}
                      />
                    </div>
                  </div>
                  <div className="survey-price">
                    <div>
                      <label>
                        Количество прохождений
                        <span className="field">*</span>
                      </label>
                    </div>
                    <div>
                      <input
                        ref={usagesLimitRef}
                        type="number"
                        className="field price-field"
                        placeholder="Введите стоимость в рублях"
                        required={true}
                        defaultValue={newSurvey?.price}
                      />
                    </div>
                  </div>


                  <div className="survey-time">

                    <div className="survey-audience">
                      <label className="">

                      Ограничить время прохождения 

                        

                      </label>
                    
                      <input
                          ref={null}
                          className=""
                          type="checkbox"
                          checked = {isLimitedCompletionTimeRef}
                          onClick={() => { setIsLimitedCompletionTimeRef(!isLimitedCompletionTimeRef) }} />
                      <div>
                        
                        <label className="">
                          Длительность опроса (мин) <span className="required-field">*</span>
                        </label>
                      </div>
                      <div>
                        <input
                          disabled = {!isLimitedCompletionTimeRef}
                          ref={completionTimeLimitRef}
                          type="number"
                          className="field time-field"
                          placeholder="Длительность опроса"
                          defaultValue={newSurvey?.completionTimeLimit}
                          required={true}
                        />
                      </div>
                      
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