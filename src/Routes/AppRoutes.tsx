import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "../Components/common/PageLoader";
import LoginLayout from "../Components/Layout/LoginLayout";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import("../Pages/Login"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const MockTest = lazy(() => import("../Pages/MockTest"));
const Pricing = lazy(() => import("../Pages/Pricing"));
const VocabBook = lazy(() => import("../Pages/VocabBook"));
const KnowledgeZone = lazy(() => import("../Pages/KnowledgeZone"));
const Voucher = lazy(() => import("../Pages/Voucher"));
const Profile = lazy(() => import("../Pages/Profile"));
const CheckOut = lazy(() => import("../Pages/CheckOut"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const ThankYou = lazy(() => import("../Pages/ThankYou"));
const FailedPage = lazy(() => import("../Pages/FailedPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        {/* LOGIN */}
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* PROTECTED DASHBOARD */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mock-test" element={<MockTest />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/vocab-book" element={<VocabBook />} />
            <Route path="/knowledge-zone" element={<KnowledgeZone />} />
            <Route path="/voucher" element={<Voucher />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/failed-page" element={<FailedPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
