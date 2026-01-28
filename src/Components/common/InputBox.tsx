import { useState } from "react";
import SvgIcons from "../../assets/Svg/SvgIcons";

type InputBoxProps = {
    label: string | undefined;
    value: string | number | undefined;
    errorMessage?: string;
    type?: string | undefined;
    id: string;
    errorId?: string;
    name: string | undefined;
    className?: string | undefined;
    mainClassName?: string | undefined;
    onChange?: React.ChangeEventHandler | undefined;
    maxLength?: number;
    fieldIcons?: React.ReactNode;
    min?: string | number | undefined;
    isPassword?: boolean;
};

const InputBox = ({
    label,
    value,
    errorMessage,
    type = "text",
    id,
    errorId,
    name,
    className = "",
    mainClassName = "",
    onChange = () => {},
    maxLength,
    fieldIcons,
    min,
    isPassword,
}:InputBoxProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <>
            <div className={"floating-label " + mainClassName}>
                <input
                    className={"floating-input form-control " + className}
                    type={isPassword && showPassword ? 'text' : type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder=" "
                    onChange={onChange}
                    maxLength={maxLength}
                    min={min}
                />
                <label htmlFor={id}>{label}</label>
                {isPassword && (
                    <span className="floating-input-icon" onClick={() => setShowPassword(!showPassword)}>
                        {isPassword ? (showPassword ? SvgIcons.showPasswordIcon : SvgIcons.hidePasswordIcon) : fieldIcons}
                    </span>
                )}
                {errorMessage && (
                    <span className="input-error" id={errorId}>
                        {errorMessage}
                    </span>
                )}
            </div>
        </>
    );
};

export default InputBox;