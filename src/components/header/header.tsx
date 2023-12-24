import { Link } from "react-router-dom";

// Шапка с навигационной панелью

export default function Header(): JSX.Element {
  return(
    <header>
    <nav>
      <ul className="navbar">
        <li className="nav-left">
          <Link to="#">
            <i className="icon-logo" style={{ fontSize: 32 }} />
          </Link>
        </li>
        <li className="nav-center">
          <ul>
            <li>
              <Link to="#">Главная страница</Link>
            </li>
            <li>
              <Link to="#">Интервью</Link>
            </li>
            <li>
              <Link to="#" className="active">
                Опросы
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-right">
          <ul>
            <li>
              <Link to="#">
                <i className="icon-bell" style={{ fontSize: 24 }} />
              </Link>
            </li>
            <li>
              <Link to="#">Иван Иванов</Link>
            </li>
            <li>
              <Link to="#">Выйти</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  )
}