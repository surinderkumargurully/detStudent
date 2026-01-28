import { PaymentSuccessImg } from "../assets/Images/Images";
import SvgIcons from "../assets/Svg/SvgIcons";
import ButtonLink from "../Components/common/ButtonLink";
import { ConstantText, ThankYouPageContent } from "../Utils/Constant";
import '../Style/thankYou.css'


const ThankYou = () =>{
    return(
        <>
            <div className="thank-you-page">
                <div className="thank-you-page-container">
                    <div className="thank-you-img">
                        <img src={PaymentSuccessImg} alt="Payment Success Img" />
                    </div>
                    <h2>{ThankYouPageContent.ThankYouHeading}</h2>
                    <p>{ThankYouPageContent.ThankYouHeadingText}</p>
                    <ButtonLink 
                        btnIcon={SvgIcons.dashboardIcon}
                        btnText={ConstantText.BackToDashboard}
                        url="/dashboard"
                    />
                </div>
            </div>
        </>
    )
}
export default ThankYou;