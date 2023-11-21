import { Outlet, useOutletContext, Navigate } from "react-router-dom";

const DashboardLayout = () => {
  const user = useOutletContext();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet context={user} />;
};
export default DashboardLayout;
