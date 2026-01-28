import { Link } from "react-router-dom";

type ButtonProps = {
  btnClassName?: string | undefined;
  btnText: string;
  btnIcon?: React.ReactNode;
  btnStyle?: React.CSSProperties | undefined;
  url:string;
};
const ButtonLink = ({
  btnClassName = '',
  btnText = '',
  btnIcon,
  btnStyle,
  url,
}: ButtonProps) => {  
  return (
    <Link to={url}
      className={'comman-btn common-btn-link ' + btnClassName}
      style={btnStyle}
    >
      {btnIcon} {btnText}
    </Link>
  );
};

export default ButtonLink;
