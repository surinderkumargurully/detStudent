import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Suspense } from "react";
import PageLoader from "../common/PageLoader";

const DashboardLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />

      <div className="main-area">
        <Header />
        <div className="page-content">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
