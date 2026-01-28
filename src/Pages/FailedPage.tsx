import { PaymentFailedImg } from "../assets/Images/Images";
import SvgIcons from "../assets/Svg/SvgIcons";
import ButtonLink from "../Components/common/ButtonLink";
import { PaymentFailedPageContent } from "../Utils/Constant";
import '../Style/thankYou.css'
import { Link } from "react-router";
import { GurullyUrls } from "../Utils/Url";

const FailedPage = () => {
  return (
        <div className="thank-you-page failed-you-page">
            <div className="thank-you-page-container">
                <div className="thank-you-img">
                    <img src={PaymentFailedImg} alt="Payment Success Img" />
                </div>
                <h2>{PaymentFailedPageContent.PaymentFailedHeading}</h2>
                <p>{PaymentFailedPageContent.PaymentFailedHeadingText}</p>
                <ButtonLink 
                    btnIcon={SvgIcons.RetryIcon}
                    btnText={PaymentFailedPageContent.RetryPayment}
                    url="/dashboard"
                />
                <div className="contact-support-link">
                    <Link to={GurullyUrls.HelpDeskLink}>{PaymentFailedPageContent.ContactSupport}</Link>
                </div>
            </div>
        </div>
    );
};

export default FailedPage;