type ButtonProps = {
  btnClassName?: string | undefined;
  btnText: string;
  btnIcon?: React.ReactNode;
  btnType?: 'button' | 'submit' | 'reset';
  onClick: React.MouseEventHandler | undefined;
  btnStyle?: React.CSSProperties | undefined;
  disabled?: boolean;
  isPending?: boolean;
};
const Button = ({
  btnClassName = '',
  btnText = '',
  btnIcon,
  btnType = 'button',
  onClick = () => {},
  btnStyle,
  disabled = false,
  isPending = false,
}: ButtonProps) => {  
  return (
    <button
      className={'comman-btn ' + btnClassName}
      type={btnType}
      style={btnStyle}
      onClick={onClick}
      disabled={isPending ? isPending : disabled}
    >
      {btnIcon} {isPending ? <div className="loader"></div> : btnText}
    </button>
  );
};

export default Button;
