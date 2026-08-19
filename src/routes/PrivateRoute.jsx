import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useHandleCurrentLoggedInUserQuery } from "../features/auth/authApi";
import EmailVerifySkeleton from "../components/skeleton/EmailVerifySkeleton";
import { useEffect } from "react";
import { userLoggedIn } from "../features/auth/authSlice";
import useAuth from './../hooks/useAuth';
import { useGetVendorDetailsQuery } from "../features/shop/shopApi";

const PrivateRoute = ({ children }) => {
  const { data: currentUser, isLoading } = useHandleCurrentLoggedInUserQuery();
  const vendorId = currentUser?.data?._id;
  const { data: shopDetails, isLoading:vendorLoadingDetails } = useGetVendorDetailsQuery(vendorId, { skip: !vendorId });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser?.data) {
      dispatch(userLoggedIn(currentUser?.data));
    }
  }, [currentUser, dispatch]);

  // ✅ Always check loading FIRST — before any redirect
  // This prevents redirecting based on undefined/unloaded data
  if (isLoading || vendorLoadingDetails) {
    return <EmailVerifySkeleton />;
  }

  if(shopDetails?.data?.shop_approval === 'PENDING' || shopDetails?.data?.shop_approval === 'REJECTED'){
    return <Navigate to="/approval" replace />;
  }

  if (!currentUser?.data || currentUser?.data?.role !== "VENDOR" || currentUser?.data?.isShopCreated !== true) {
    return <Navigate to="/vendor-created-shop" replace />;
  }

  return children ?? <Outlet />;
};

export default PrivateRoute;
