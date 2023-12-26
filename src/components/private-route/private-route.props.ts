import { AuthorizationStatus } from "../../const";

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default PrivateRouteProps;
