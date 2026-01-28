import { useState } from "react";
import "../Style/checkout.css";
import { CheckoutPageContent, ConstantText } from "../Utils/Constant";
import InputBox from "../Components/common/InputBox";
import {
    ActiveOfferDots,
    CheckoutGurullyLogo,
    ESeva,
    Razorpay,
    ShineResunga,
    Stripe,
    UpiIcon,
} from "../assets/Images/Images";
import Button from "../Components/common/Button";
import CheckOutPopup from "../Components/Pricing/CheckOutPopup";
import SvgIcons from "../assets/Svg/SvgIcons";
import NepalPayment from "../Components/Pricing/NepalPayment";

type PlanKey = "7 Days" | "15 Days" | "30 Days" | "60 Days";
const GST_RATE = 0.18;
const PLAN_PRICES: Record<PlanKey, number> = {
    "7 Days": 600,
    "15 Days": 900,
    "30 Days": 1000,
    "60 Days": 1300,
};
const PROMO_CODE = "GURULLY10";
const PROMO_DISCOUNT = 0.1; // 10%

const CheckOut = () => {
    const [offerModalShow, setOfferModalShow] = useState(false);
    const [nepalPaymentModalShow, setNepalPaymentModalShow] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<PlanKey>("15 Days");
    const [promoCode, setPromoCode] = useState<string>("");
    const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);
    const Success = false;

    /* ---------------- HANDLERS ---------------- */
    const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromoCode(e.target.value.toUpperCase());
        setIsPromoApplied(false);
    };

    const applyPromo = () => {
        if (promoCode === PROMO_CODE && selectedPlan == "60 Days") {
            setIsPromoApplied(true);
        } else {
            alert("Promo code is not applicable for this plan.");
        }
    };

    /* ---------------- PRICE CALCULATIONS ---------------- */
    const subTotal = PLAN_PRICES[selectedPlan];
    const discount = isPromoApplied ? subTotal * PROMO_DISCOUNT : 0;
    const discountedSubTotal = subTotal - discount;
    const gst = Math.round(discountedSubTotal * GST_RATE);
    const grandTotal = discountedSubTotal + gst;

    return (
        <>
            {/* ---------- HEADING ---------- */}
            <div className="checkout-heading">
                <h1>{CheckoutPageContent.CheckoutHeading}</h1>
                <p>{CheckoutPageContent.CheckoutHeadingText}</p>
            </div>

            
            <div className="checkout-wrapper">
                <div className="checkout-wrapper-left">
                    <div className="checkout-wrapper-left-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>{ConstantText.ItemName}</th>
                                    <th>{ConstantText.Quantity}</th>
                                    <th className="right">{ConstantText.Amount}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="checkout-plan-name">
                                            <img
                                                src={CheckoutGurullyLogo}
                                                alt="CheckoutGurullyLogo"
                                            />
                                            <span>
                                                {
                                                    ConstantText.GurullyPrimeAccess
                                                }
                                            </span>
                                            {selectedPlan}
                                        </div>
                                    </td>
                                    <td>
                                        <select
                                            value={selectedPlan}
                                            onChange={(e) =>
                                                setSelectedPlan(
                                                    e.target.value as PlanKey
                                                )
                                            }
                                        >
                                            {(
                                                Object.keys(
                                                    PLAN_PRICES
                                                ) as PlanKey[]
                                            ).map((plan) => (
                                                <option key={plan} value={plan}>
                                                    {plan}
                                                </option>
                                            ))}
                                        </select>
                                    </td>

                                    <td className="right">
                                        INR <span>{subTotal}</span>
                                    </td>
                                </tr>
                                {isPromoApplied && (
                                    <tr className="promo-code-apply">
                                        <td colSpan={2}>Promo Discount</td>
                                        <td className="right">
                                            <span className="promo-badge">
                                                Gurully10
                                                {SvgIcons.whiteCloseIcon}
                                            </span>
                                            (-) INR <span>{discount} </span>
                                        </td>
                                    </tr>
                                )}

                                <tr>
                                    <td colSpan={2}>{ConstantText.SubTotal}</td>
                                    <td className="right">
                                        INR <span>{subTotal}</span>
                                    </td>
                                </tr>

                                

                                <tr className="gst-total">
                                    <td colSpan={2}>{ConstantText.GST}</td>
                                    <td className="right">
                                        INR <span>{gst}</span>
                                    </td>
                                </tr>

                                <tr className="grand-total">
                                    <td colSpan={2}>
                                        {ConstantText.GrandTotal}
                                    </td>
                                    <td className="right">
                                        INR <strong>{grandTotal}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="payment-method">
                            <h4>{ConstantText.PaymentMethod}</h4>
                            <div className="payment-method-options">
                                <div className="paymentMethod-box">
                                    <input type="checkbox" id="paymentMethod" />
                                    <label htmlFor="paymentMethod">
                                        <span className="paymentMethod-inner">
                                            <span className="payment-icons">
                                                <img src={UpiIcon} alt="upi-icon" />
                                            </span>
                                        </span>
                                        <span className="paymentMethod-text">{CheckoutPageContent.UPIText}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="payment-method-options">
                                <div className="paymentMethod-box">
                                    <input type="checkbox" id="paymentMethod3" />
                                    <label htmlFor="paymentMethod3">
                                        <span className="paymentMethod-inner">
                                            <span className="payment-icons">
                                                <img src={ShineResunga} alt="upi-icon" />
                                            </span>
                                        </span>
                                        <span className="paymentMethod-text">{CheckoutPageContent.PayByQR}</span>
                                    </label>
                                </div>
                                <div className="paymentMethod-box">
                                    <input type="checkbox" id="paymentMethod4" />
                                    <label htmlFor="paymentMethod4">
                                        <span className="paymentMethod-inner">
                                            <span className="payment-icons">
                                                <img src={ESeva} alt="upi-icon" />
                                            </span>
                                        </span>
                                        <span className="paymentMethod-text">{CheckoutPageContent.CreditCardText}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="payment-method-options">
                                <div className="paymentMethod-box">
                                    <input type="checkbox" id="paymentMethod5" />
                                    <label htmlFor="paymentMethod5">
                                        <span className="paymentMethod-inner">
                                            <span className="payment-icons">
                                                <img src={Stripe} alt="upi-icon" />
                                            </span>
                                        </span>
                                        <span className="paymentMethod-text">{CheckoutPageContent.CreditCardText}</span>
                                    </label>
                                </div>
                                <div className="paymentMethod-box">
                                    <input type="checkbox" id="paymentMethod6" />
                                    <label htmlFor="paymentMethod6">
                                        <span className="paymentMethod-inner">
                                            <span className="payment-icons">
                                                <img src={Razorpay} alt="upi-icon" />
                                            </span>
                                        </span>
                                        <span className="paymentMethod-text">{CheckoutPageContent.UPIText}</span>
                                    </label>
                                </div>
                            </div>
                            <Button
                                btnText={ConstantText.PayNow}
                                onClick={() => setNepalPaymentModalShow(true)}
                            />
                        </div>
                    </div>
                </div>

                <div className="checkout-wrapper-right">
                    <div className="checkout-right-promo-code">
                        <h6>{ConstantText.PromoCode}</h6>
                        <div className="checkout-promo-code-input">
                            <InputBox
                                value={promoCode}
                                id="enterCode"
                                name="enterCode"
                                label={ConstantText.EnterCode}
                                onChange={handlePromoChange}
                            />
                            <button onClick={applyPromo}>Apply</button>
                        </div>
                    </div>

                    <div className="check-out-active-offer">
                        <h6>{ConstantText.ActiveOffers}</h6>

                        <div className="check-out-active-offer-outer">
                            <div className="active-offer-box">
                                <div className="active-offer-box-left">
                                    <p>10% Off</p>
                                    <img
                                        src={ActiveOfferDots}
                                        alt="ActiveOfferDots"
                                    />
                                </div>
                                <div className="active-offer-box-right">
                                    <div className="active-offer-box-right-top">
                                        <div className="active-offer-box-right-top-content">
                                            <strong>GURULLY10</strong>
                                            <span>
                                                Save 10% on 60 Days plan
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => setOfferModalShow(true)}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    <div className="active-offer-box-right-bottom">
                                        <p>
                                            {" "}
                                            Get 10% OFF on 60-days package!
                                            Limited Time Offer!!
                                        </p>
                                        {openIndex === 0 && (
                                            <ul>
                                                <li>
                                                    This promocode is only
                                                    applicable on 60 days
                                                    packages.
                                                </li>
                                                <li>
                                                    Coupon is limited to one per
                                                    customer.
                                                </li>
                                                <li>
                                                    Discount does not apply to
                                                    taxes or similar charges.
                                                </li>
                                                <li>
                                                    No refunds once purchased.
                                                </li>
                                            </ul>
                                        )}

                                        <button
                                            onClick={() =>
                                                setOpenIndex(
                                                    openIndex === 0 ? null : 0
                                                )
                                            }
                                            className="read-more-btn"
                                        >
                                            {openIndex === 0
                                                ? "Read Less −"
                                                : "Read More +"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="active-offer-box">
                                <div className="active-offer-box-left">
                                    <p>10% Off</p>
                                    <img
                                        src={ActiveOfferDots}
                                        alt="ActiveOfferDots"
                                    />
                                </div>
                                <div className="active-offer-box-right">
                                    <div className="active-offer-box-right-top">
                                        <div className="active-offer-box-right-top-content">
                                            <strong>GURULLY10</strong>
                                            <span>
                                                Save 10% on 60 Days plan
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => setOfferModalShow(true)}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    <div className="active-offer-box-right-bottom">
                                        <p>
                                            {" "}
                                            Get 10% OFF on 60-days package!
                                            Limited Time Offer!!
                                        </p>
                                        {openIndex === 1 && (
                                            <ul>
                                                <li>
                                                    This promocode is only
                                                    applicable on 60 days
                                                    packages.
                                                </li>
                                                <li>
                                                    Coupon is limited to one per
                                                    customer.
                                                </li>
                                                <li>
                                                    Discount does not apply to
                                                    taxes or similar charges.
                                                </li>
                                                <li>
                                                    No refunds once purchased.
                                                </li>
                                            </ul>
                                        )}

                                        <button
                                            onClick={() =>
                                                setOpenIndex(
                                                    openIndex === 1 ? null : 1
                                                )
                                            }
                                            className="read-more-btn"
                                        >
                                            {openIndex === 1
                                                ? "Read Less −"
                                                : "Read More +"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CheckOutPopup
                show={offerModalShow}
                onHide={() => setOfferModalShow(false)}
                appliedText={PROMO_CODE}
                messageText="10"
                success={Success}
            />
            <NepalPayment 
                show={nepalPaymentModalShow}
                onHide={() => setNepalPaymentModalShow(false)}
                payment={"1500"}
            />
        </>
    );
};

export default CheckOut;
