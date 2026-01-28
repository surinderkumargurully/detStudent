import { Link } from "react-router-dom";
import SvgIcons from "../../assets/Svg/SvgIcons";

type ButtonNonPrimeProps = {
    buttonText: string | undefined;
    onClick?: React.MouseEventHandler | undefined;
    btnClassName?: string | undefined;
    url: string | "#";
}

const ButtonNonPrime = ({ 
    buttonText, 
    onClick = () => {},
    btnClassName,
    url
}:ButtonNonPrimeProps) =>{
    return(
        <>
            <Link 
                className={'non-prime-common-btn ' + (btnClassName ? btnClassName : "")}
                to={url}
                onClick={onClick}
            >
                <span>{SvgIcons.nonPrimeIcon}</span>
                {buttonText}
            </Link>
        </>
    )
}

export default ButtonNonPrime;