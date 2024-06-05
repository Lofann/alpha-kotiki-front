import { Link } from "react-router-dom"
import Header from "../../components/header/header"
import { Helmet } from "react-helmet-async"

// Компонент главной страницы
export default function MainPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Header/>
      <div className="contain-2">
          <main className="main">
            <div className="page-title-center">Объявления</div>
            <div className="align-center font-16-px">
              Ознакомиться с публичным swagger нашего проекта и тем самым узнать больше о функционале backend-приложения 
              вы можете по ссылке: <Link to="https://backend.punkotiki.ru/swagger/index.html"><span className="blue">https://backend.punkotiki.ru/swagger/index.html</span></Link>
            </div>
          </main>
        </div>
    </>
  )
}
