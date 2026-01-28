import { useState } from "react";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { ConstantText, ProfilePageTooltip } from "../../Utils/Constant";
import InputBox from "../common/InputBox";
import Button from "../common/Button";

const ChangePassword =() =>{
    const [passwordData, setPasswordDeta]= useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = event.target;
        setPasswordDeta((prev) => ({...prev, [name]: value}));
    }




    return(
        <>
            <div className="profile-content">
                <div className="profile-edit-information-box">
                    <h4>
                        {ConstantText.ChangeYourPassword}
                        <span className="custom-tooltip">
                            {SvgIcons.grayInfoIcon}
                            <span className="custom-tooltip-content">
                                {ProfilePageTooltip.ChangeYourPasswordTooltip}
                            </span>
                        </span>
                    </h4>
                    <form >
                        <div className="profile-edit-detail">
                            <InputBox
                                id="currentPassword"
                                value={passwordData.currentPassword}
                                label={ConstantText.CurrentPassword}
                                type="password"
                                errorMessage={""}
                                onChange={handleChange}
                                isPassword={true}
                                name="currentPassword"
                                maxLength={30}
                            />
                        </div>
                        <div className="profile-edit-detail">
                            <InputBox
                                id="newPassword"
                                value={passwordData.newPassword}
                                label={ConstantText.NewPassword}
                                type="password"
                                errorMessage={""}
                                onChange={handleChange}
                                isPassword={true}
                                name="newPassword"
                                maxLength={30}
                            />
                        </div>
                        <div className="profile-edit-detail">
                            <InputBox
                                id="confirmNewPassword"
                                value={passwordData.confirmNewPassword}
                                label={ConstantText.ConfirmNewPassword}
                                type="password"
                                errorMessage={""}
                                onChange={handleChange}
                                isPassword={true}
                                name="confirmNewPassword"
                                maxLength={30}
                            />
                        </div>
                        <Button btnText={ConstantText.SaveChanges} onClick={undefined} btnType="submit"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;