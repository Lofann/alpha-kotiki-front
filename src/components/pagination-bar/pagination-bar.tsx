import { Link } from "react-router-dom"

export default function PagginationBar(): JSX.Element {
  return (
    <div className="pagination-bar">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Предыдущая">
              <span aria-hidden="true">
                <i className="icon-arrows-left" />
              </span>
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              ...
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              6
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Следующая">
              <span aria-hidden="true">
                <i className="icon-arrows-right" />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}