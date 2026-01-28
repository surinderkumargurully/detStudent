import { ConstantText } from "../../Utils/Constant";
import Button from "../common/Button";

type PricingProps = {
    day: string | undefined;
    currency: string | undefined;
    price: string | undefined;
    pricingText: string | undefined;
    btnText: string;
    pricingClass?: string | undefined;
    pricingTagImg?: string | undefined;
    pricingTagText?: string | undefined;
    OfferPrice?: string | undefined;
    pricingOfferImg?: string | undefined;
    pricingOfferText?: string | undefined;
    onClick: React.MouseEventHandler | undefined;
};

const PricingBox = ({
    day,
    currency,
    price,
    pricingText,
    btnText,
    pricingClass,
    pricingTagImg,
    pricingTagText,
    OfferPrice,
    onClick = () => {},
    pricingOfferImg,
    pricingOfferText,
}: PricingProps) => {
    return (
        <>
            <div
                className={"pricing-box " + (pricingClass ? pricingClass : "")}
            >
                {pricingOfferText && (
                    <div className="pricing-offer">
                        <img
                            src={pricingOfferImg}
                            alt="pricing-animated-arrow"
                        />
                        <span>{pricingOfferText}</span>
                    </div>
                )}
                <div className="pricing-box-day-box">
                    <div className="pricing-box-day">
                        <div className="pricing-box-day-content">
                            <span>{day}</span> {ConstantText.DAYS}
                        </div>
                        {pricingTagText && (
                            <div className="pricing tag">
                                <img src={pricingTagImg} alt="pricingTagImg" />
                                <span>{pricingTagText}</span>
                            </div>
                        )}
                    </div>
                    <div className="pricing-content-bottom">
                        <div className="price">
                            <small className="currency">{currency}</small>
                            <span>
                                {OfferPrice && (
                                    <span className="offer-price">
                                        {OfferPrice}
                                    </span>
                                )}
                                {price}
                                <sup>*</sup>
                            </span>
                        </div>
                        <p>{pricingText}</p>
                        <div className="price-box-btn">
                            <Button btnText={btnText} onClick={onClick} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingBox;
