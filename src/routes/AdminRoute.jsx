import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHandleCurrentLoggedInUserQuery } from '../features/auth/authApi'

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state?.auth);
  const { data: userInfo, isLoading } = useHandleCurrentLoggedInUserQuery();

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (!userInfo?.data) {
    return <Navigate to="/login" replace />;
  }

  if (userInfo?.data?.role === 'VENDOR') {
    return <Navigate to="/shop-overview" replace />;
  }

  if (userInfo?.data?.role === 'ADMIN') {
    return children ?? <Outlet />;
  }
  return <Navigate to="/shop-overview" replace />;
};

export default AdminRoute;
