
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../services/statemanagement/Store";

const PrivateRoutes = ({ children }: any) => {
  const user = useAppSelector((state) => state.userDetails);
  const station = useAppSelector((state) => state.stationdetail)
  const director =useAppSelector((state)=> state.directorDetails)



  const check = user?.name;
  const stationUser = station?._id
  const directorUSer = director?.name

  if (check) {
    return children;
  } else if (stationUser) {
    return children
  } else if (directorUSer) {
    return children
  }
  else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoutes;
