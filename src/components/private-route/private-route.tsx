import { AuthorizationStatus, AppRoute } from "../../const";
import PrivateRouteProps from "./private-route.props";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={`${AppRoute.Login}`}/>
  )
}