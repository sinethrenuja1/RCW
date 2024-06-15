import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const getItemFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log(getItemFromLocalStorage?.acc_type);
  return (getItemFromLocalStorage?.acc_type == "manager"  )
    ? children 
    : <Navigate to="/Login" replace={true} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;