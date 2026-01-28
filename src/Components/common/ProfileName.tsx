import { useProfileStore } from "../../store/profileStore";

const ProfileName = () => {
     const { name } = useProfileStore();
    return (
        <span className="profile-text">{name || "Maharshi"}</span>
    );
};

export default ProfileName;