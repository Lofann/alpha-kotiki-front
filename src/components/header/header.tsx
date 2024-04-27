import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { NavLink } from "react-router-dom";

// Шапка с навигационной панелью
export default function Header(): JSX.Element {
  return(
    <header className="header">
      <div className="top">
        <div className="contain-1">
          <div className="top-w">
            <Link to="#" className="logo">
              <i className="icon-logo" />
            </Link>
            <div className="top-w-2">
              <NavLink 
                  to={AppRoute.Main} 
                  className={({isActive}) => isActive? "top-item active" : "top-item"}>
                Главная страница
              </NavLink>
              <NavLink 
                  to={`/${AppRoute.NotFound}`} 
                  className={({isActive}) => isActive? "top-item active" : "top-item"}>
                Интервью
              </NavLink>
              <NavLink 
                  to={`/${AppRoute.Surveys}`} 
                  className={({isActive}) => isActive? "top-item active" : "top-item"}>
                Опросы
              </NavLink>
            </div>
            <div className="top-w-3">
              <Link to="#" className="top-item">
                <i className="icon-bell" />
              </Link>
              <Link to="#" className="top-item">
                Иван Иванов
              </Link>
              <Link to="#" className="top-item">
                Выйти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
