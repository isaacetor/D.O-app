import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../services/statemanagement/Store";

const PrivateRoutes = ({ children }: any) => {
  const user = useAppSelector((state) => state.userDetails);

  const check = user?.name;

  if (check) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoutes;
