import { useState } from "react";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { ConstantText } from "../../Utils/Constant";
import ProfileAvatarUpdate from "./ProfileAvatarUpdate";
import ProfileImage from "../common/ProfileImage";
import ProfileName from "../common/ProfileName";

const ProfileDetail = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <>
      <div className="profile-detail-wrapper">
        <div className="profile-detail-top">
          <div className="profile-detail-left">
            <ProfileImage onClick={() => setModalShow(true)} />
          </div>

          <div className="profile-detail-right">
            <h2><ProfileName /></h2>
            <p>
              {ConstantText.ExpiryDate}: <span>5th Oct 2025</span>
            </p>
          </div>
        </div>

        <div className="profile-detail-bottom">
          <h4>{ConstantText.About}</h4>

          <p>
            <strong>{SvgIcons.emailIcon}{ConstantText.Email} :</strong>
            <span>maharshi.patel@gurully.com</span>
          </p>

          <p>
            <strong>{SvgIcons.phoneIcon}{ConstantText.Phone} :</strong>
            <span>9325216364</span>
          </p>

          <p>
            <strong>{SvgIcons.countryIcon}{ConstantText.Country} :</strong>
            <span>India</span>
          </p>
        </div>
      </div>

      <ProfileAvatarUpdate
        props={{ show: modalShow, onHide: () => setModalShow(false) }}
      />
    </>
  );
};

export default ProfileDetail;
