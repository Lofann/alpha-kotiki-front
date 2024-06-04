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
    </>
  )
}
