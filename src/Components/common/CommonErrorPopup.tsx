import { useState } from "react";
import { CommonErrorPopupImg } from "../../assets/Images/Images";
import { ConstantText } from "../../Utils/Constant";
import Button from "./Button";

const CommonErrorPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`common-error-popup ${isVisible ? "" : "d-none"}`}>
            <div className="common-error-popup-inner">
                <div className="common-error-popup-image">
                    <img src={CommonErrorPopupImg} alt="Common Error Popup Img" />
                </div>

                <h4>{ConstantText.FailedError}</h4>
                <p>{ConstantText.FailedErrorMsg}</p>

                <Button
                    btnText={ConstantText.Ok}
                    btnType="button"
                    onClick={() => setIsVisible(false)}
                />
            </div>
        </div>
    );
};

export default CommonErrorPopup;
