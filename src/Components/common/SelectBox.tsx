import { ConstantText } from "../../Utils/Constant";

export type Option = {
  value: string;
  label: string;
};
type SelectOption = {
    id?: string;
    label: string;
    selectedValue: string;
    onChange?: React.ChangeEventHandler | undefined;
    errorMessage?: string;
    errorId?: string;
    options: Option[];
    name?: string;
    ProfileNote?: string;
};

const SelectBox = ({id="gender-box", selectedValue, label, onChange, errorMessage, errorId, options, name, ProfileNote}: SelectOption) => {
    return (
        <div className="floating-label floating-label-additional">
            <select
                id={id}
                className={`floating-select ${selectedValue ? "has-value" : ""}`}
                value={selectedValue}
                onChange={onChange}
                name={name}
            >
                <option value="" disabled hidden />

                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <label htmlFor={id}>{label}</label >
            {errorMessage && (
                <span className="input-error" id={errorId}>
                    {errorMessage}
                </span>
            )}
            {ProfileNote && (
                <span className="note-text">
                    <strong>{ConstantText.Note}</strong>: {ProfileNote}
                </span>
            )}
        </div>
    );
};

export default SelectBox;
