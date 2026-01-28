import { PageNotFound, PageNotFoundText } from "../assets/Images/Images";
import SvgIcons from "../assets/Svg/SvgIcons";
import ButtonLink from "../Components/common/ButtonLink";
import { ConstantText } from "../Utils/Constant";
import "../Style/pageNotFound.css";

const NotFound = () => {
    return (
        <>
            <div className="page-not-found">
                <div className="page-not-found-content">
                    <div className="page-not-found-text-img">
                        <img src={PageNotFoundText} alt="Page Not Found" />
                    </div>
                    <div className="page-not-found-img">
                        <img src={PageNotFound} alt="Page Not Found" />
                    </div>

                    <h1>{ConstantText.PageNotFoundTitle}</h1>
                    <p>{ConstantText.PageNotFoundText}</p>
                    <ButtonLink
                        btnIcon={SvgIcons.dashboardIcon}
                        btnText={ConstantText.BackToDashboard}
                        url="/dashboard"
                    />
                </div>
            </div>
        </>
    );
};

export default NotFound;
