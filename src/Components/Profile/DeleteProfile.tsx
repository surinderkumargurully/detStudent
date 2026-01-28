import { useState } from "react";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { ConstantText, ProfilePageTooltip } from "../../Utils/Constant";
import Button from "../common/Button";
import InputBox from "../common/InputBox";


const DeleteProfile = () =>{
    const [deleteInput, setDeleteInput] = useState<string>("");

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDeleteInput(e.target.value);
    }
    return(
        <>
            <div className="profile-content delete-profile-content">
                <div className="profile-edit-information-box">
                    <h4>
                        {ConstantText.DeleteAccount}
                        <span className="custom-tooltip">
                            {SvgIcons.grayInfoIcon}
                            <span className="custom-tooltip-content">
                                {ProfilePageTooltip.DeleteAccountTooltip}
                            </span>
                        </span>
                    </h4>
                    <p className="delete-account-information">
                        {ConstantText.deletionInformation.before}
                        <strong>{ConstantText.deletionInformation.keyword}</strong>
                        {ConstantText.deletionInformation.after}
                    </p>
                    <div className="profile-edit-detail">
                        <InputBox
                            id={ConstantText.delete}
                            value={deleteInput}
                            label={ConstantText.delete}
                            type="text"
                            errorMessage={""}
                            onChange={handleChange}
                            name={ConstantText.delete}
                        />
                    </div>
                    <p className="delete-warning-detail">
                        <strong>{ConstantText.Warning}</strong>:
                        {ConstantText.WarningText}
                    </p>
                    <Button btnText={ConstantText.SaveChanges} onClick={undefined} />
                </div>
            </div>
        </>
    )
}
export default DeleteProfile;