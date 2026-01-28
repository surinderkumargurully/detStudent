import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ConstantText } from "../../Utils/Constant";
import { ProfileIcon1 } from "../../assets/Images/Images";
import SvgIcons from "../../assets/Svg/SvgIcons";
import Button from "../common/Button";
import { useProfileStore } from "../../store/profileStore";
import ProfileImage from "../common/ProfileImage";

type ProfileAvatar = {
    props: React.ComponentProps<typeof Modal>;
};

const ProfileAvatarUpdate = ({ props }: ProfileAvatar) => {
    const [selectAvatar, setSelectAvatar] = useState<string | null>(null);

    // ✅ FIX: use setProfile instead of setAvatar
    const setProfile = useProfileStore((state) => state.setProfile);
    // const avatar = useProfileStore((state) => state.avatar);

    const avatarImages = [
        ProfileIcon1,
        ProfileIcon1,
        ProfileIcon1,
        ProfileIcon1,
        ProfileIcon1,
        ProfileIcon1,
        ProfileIcon1,
        ProfileIcon1,
    ];

    const handleSave = () => {
        if (selectAvatar) {
            setProfile({ avatar: selectAvatar });
            props.onHide?.();
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="profile-avatar-modal"
        >
            <Modal.Body>
                <button
                    className="modal-close"
                    onClick={props.onHide}
                >
                    {SvgIcons.closeIcon}
                </button>

                <div className="profile-image-upload">
                    <div className="profile-box-img prime">
                        <ProfileImage onClick={() => {}} />
                    </div>
                </div>

                <div className="choose-avatar-box">
                    <h4>{ConstantText.ChooseYourAvatar}</h4>

                    <div className="choose-avatar-icon-outer">
                        {avatarImages.map((image, index) => (
                            <div
                                className="choose-avatar-icon"
                                key={index}
                                onClick={() => setSelectAvatar(image)}
                            >
                                <img
                                    src={image}
                                    alt={`avatar-${index}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="avatar-save-btn">
                        <Button
                            btnText={ConstantText.SaveChanges}
                            onClick={handleSave}
                            btnType="submit"
                        />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ProfileAvatarUpdate;
