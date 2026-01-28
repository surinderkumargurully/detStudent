import { useState, type ChangeEvent } from "react";
import { ConstantText, ProfilePageNote, ProfilePageTooltip } from "../../Utils/Constant";
import InputBox from "../common/InputBox";
import SelectBox from "../common/SelectBox";
import SvgIcons from "../../assets/Svg/SvgIcons";
import Button from "../common/Button";

type Option = {
    value: string;
    label: string;
};
const genderOption: Option[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
];
const destinationOption: Option[] = [
    { value: "Canada", label: "Canada" },
    { value: "United States (USA)", label: "United States (USA)" },
    { value: "Australia", label: "Australia" },
    { value: "United Kingdom (UK)", label: "United Kingdom (UK)" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Europe", label: "Europe" },
    { value: "UAE", label: "UAE" },
    { value: "Singapore", label: "Singapore" },
    { value: "Others", label: "Others" },
];
const examPurposeOption: Option[] = [
    { value: "Study Permit", label: "Study Permit" },
    { value: "Permanent Residency", label: "Permanent Residency" },
    { value: "Work Permit / TR", label: "Work Permit / TR" },
    { value: "Others", label: "Others" },
];

const ProfileDetailForm = () => {
    const [formData, setFormData] = useState({
        gender: "",
        city: "",
        examDate: "",
        examPurpose: "",
        destinationCountry: "",
    });
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="profile-content">
                <div className="profile-edit-information-box">
                    <h4>
                        {ConstantText.EditAccountInformation}
                        <span className="custom-tooltip">
                            {SvgIcons.grayInfoIcon}
                            <span className="custom-tooltip-content">
                                {ProfilePageTooltip.EditAccountInformationTooltip}
                            </span>
                        </span>
                    </h4>
                    <div className="profile-edit-detail">
                        <SelectBox
                            label={ConstantText.Gender}
                            selectedValue={formData.gender}
                            options={genderOption}
                            onChange={handleChange}
                            name={ConstantText.Gender}
                        />
                    </div>
                    <div className="profile-edit-detail">
                        <InputBox
                            id={ConstantText.City}
                            value={formData.city}
                            label={ConstantText.City}
                            type="text"
                            errorMessage={""}
                            onChange={handleChange}
                            name={ConstantText.City}
                        />
                    </div>
                </div>
                <div className="profile-edit-information-box">
                    <h4>
                        {ConstantText.ExamInformation}
                        <span className="custom-tooltip">
                            {SvgIcons.grayInfoIcon}
                            <span className="custom-tooltip-content">
                                {ProfilePageTooltip.ExamInformationTooltip}
                            </span>
                        </span>
                    </h4>
                    <div className="profile-edit-detail">
                        <InputBox
                            id="examDate"
                            value={formData.examDate}
                            label={ConstantText.ExamDate}
                            type="date"
                            errorMessage={""}
                            onChange={handleChange}
                            name="examDate"
                            min={new Date().toISOString().split("T")[0]}
                            className="exam-date-field"
                        />
                    </div>
                </div>
                <div className="profile-edit-information-box">
                    <h4>
                        {ConstantText.AdditionalInformation}
                        <span className="custom-tooltip">
                            {SvgIcons.grayInfoIcon}
                            <span className="custom-tooltip-content">
                                {ProfilePageTooltip.AdditionalInformationTooltip}
                            </span>
                        </span>
                    </h4>
                    <div className="profile-edit-detail">
                        <SelectBox
                            id="destinationCountry"
                            label={ConstantText.DestinationCountry}
                            selectedValue={formData.destinationCountry}
                            options={destinationOption}
                            onChange={handleChange}
                            name="destinationCountry"
                            ProfileNote={ProfilePageNote.DestinationCountryNote}
                        />
                    </div>
                    <div className="profile-edit-detail">
                        <SelectBox
                            id="examPurpose"
                            label={ConstantText.ExamPurpose}
                            selectedValue={formData.examPurpose}
                            options={examPurposeOption}
                            onChange={handleChange}
                            name="examPurpose"
                            ProfileNote={ProfilePageNote.ExamPurposeNote}
                        />
                    </div>
                    <Button btnText={ConstantText.SaveChanges} onClick={undefined} />
                </div>
            </div>
        </>
    );
};
export default ProfileDetailForm;
