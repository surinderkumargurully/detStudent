import { useState } from "react";

type CustomSelectProps = {
    label: string;
    options: string[];
    defaultValue?: string;
    onChange?: (value: string) => void;
};

const MockTestSelect = ({
    defaultValue,
    options,
    onChange,
    label,
}: CustomSelectProps) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange?.(option);
    };

    const handleSelect = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="select-menu">
            <div
                className={
                    "select-btn " +
                    (selectedOption === defaultValue ? "" : " selected")
                }
                onClick={handleSelect}
            >
                <span className="sBtn-text">{selectedOption}</span>
            </div>

            <div className={`select-menu-outer ${isOpen ? "open" : ""}`}>
                <span>{label}</span>
                <ul className="options">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            <span className="option-text">{option}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MockTestSelect;
