import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ConstantText } from "../Utils/Constant";
import "../Style/Profile.css";

import ProfileDetail from "../Components/Profile/ProfileDetail";
import ProfileDetailForm from "../Components/Profile/ProfileDetailForm";
import ChangePassword from "../Components/Profile/ChangePassword";
import DeleteProfile from "../Components/Profile/DeleteProfile";
import PaymentHistory from "../Components/Profile/PaymentHistory";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <h1>{ConstantText.ProfilePage}</h1>

      {/* Tabs */}
      <div className="profile-tab-wrapper">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => k && setActiveTab(k)}
          id="profile-tab"
          className="profile-tabs"
        >
          <Tab eventKey="profile" title="Profile" />
          <Tab eventKey="change-password" title="Change Password" />
          <Tab eventKey="delete-account" title="Delete Account" />
          <Tab eventKey="payment-history" title="Payment History" />
        </Tabs>
      </div>

      {/* Main Layout */}
      <div className="profile-detail-outer">
        {/* LEFT – Static */}
        <div className="profile-details">
          <ProfileDetail />
        </div>

        {/* RIGHT – Dynamic */}
        <div className="profile-forms">
          {activeTab === "profile" && <ProfileDetailForm />}
          {activeTab === "change-password" && <ChangePassword />}
          {activeTab === "delete-account" && <DeleteProfile />}
          {activeTab === "payment-history" && (<PaymentHistory />)}
        </div>
      </div>
    </>
  );
};

export default Profile;
