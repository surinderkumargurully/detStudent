import { useState } from "react";
import { CommonSuccessPopupImg } from "../../assets/Images/Images";
import { ConstantText } from "../../Utils/Constant";
import Button from "./Button";

const CommonSuccessPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`common-error-popup ${isVisible ? "" : "d-none"}`}>
            <div className="common-error-popup-inner">
                <div className="common-error-popup-image">
                    <img src={CommonSuccessPopupImg} alt="Common Error Popup Img" />
                </div>

                <h4>{ConstantText.SuccessMessage}</h4>
                <p>{ConstantText.SuccessMessageText}</p>

                <Button
                    btnText={ConstantText.Ok}
                    btnType="button"
                    onClick={() => setIsVisible(false)}
                />
            </div>
        </div>
    );
};

export default CommonSuccessPopup;
