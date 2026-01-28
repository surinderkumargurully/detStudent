import { PrimeIcon } from "../../assets/Images/Images";
import { useProfileStore } from "../../store/profileStore";

type ProfileImageProps = {
    onClick: React.MouseEventHandler | undefined;
};

const ProfileImage = ({onClick}:ProfileImageProps) => {
    const { avatar } = useProfileStore();
    return (
        <>
            <span className="profile-image" onClick={onClick}>
                {avatar ? (
                    <img src={avatar} alt="Profile image" />
                ) : (
                    <div className="profile-letter color5">A</div>
                )}
                <span className="prime-icon">
                    <img src={PrimeIcon} alt="PrimeIcon" />
                </span>
            </span>
        </>
    );
};

export default ProfileImage;
