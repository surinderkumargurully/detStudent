import { useState } from "react";
import { ConstantText, VoucherPageContent } from "../Utils/Constant";
import "../Style/checkout.css";
import Button from "../Components/common/Button";
import { AuthorizedLogo, DuolingoLogo } from "../assets/Images/Images";
import SvgIcons from "../assets/Svg/SvgIcons";

type PlanKey = "01" | "02" | "03" | "04";
const GST_RATE = 0.18;
const PLAN_PRICES: Record<PlanKey, number> = {
    "01": 600,
    "02": 900,
    "03": 1000,
    "04": 1300,
};

const Voucher = () => {
    const [selectedPlan, setSelectedPlan] = useState<PlanKey>("01");

    /* ---------------- PRICE CALCULATIONS ---------------- */
    const subTotal = PLAN_PRICES[selectedPlan];
    const gst = Math.round(subTotal * GST_RATE);
    const grandTotal = subTotal + gst;

    const Benefits = [
        "Get code instantly via email",
        "Valid across globe",
        "Expires in 10 months",
        "Authorized and genuine voucher",
    ]



    return (
        <>
            {/* ---------- HEADING ---------- */}
            <div className="checkout-heading">
                <h1>{VoucherPageContent.VoucherHeading}</h1>
                <p>{VoucherPageContent.VoucherHeadingText}</p>
            </div>
            <div className="checkout-wrapper voucher-wrapper">
                <div className="checkout-wrapper-left">
                    <div className="checkout-wrapper-left-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>{ConstantText.ItemName}</th>
                                    <th>{ConstantText.Quantity}</th>
                                    <th className="right">
                                        {ConstantText.Amount}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="checkout-plan-name">
                                            <span>Duolingo Test Voucher</span>
                                        </div>
                                    </td>
                                    <td>
                                        <select
                                            value={selectedPlan}
                                            onChange={(e) =>
                                                setSelectedPlan(
                                                    e.target.value as PlanKey,
                                                )
                                            }
                                        >
                                            {(
                                                Object.keys(
                                                    PLAN_PRICES,
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
                            <Button
                                btnText={ConstantText.PayNow}
                                onClick={undefined}
                            />
                        </div>
                    </div>
                </div>

                <div className="checkout-wrapper-right voucher-wrapper-right">
                    <div className="voucher-wrapper-right-top">
                        <div className="voucher-wrapper-right-logo">
                            <img src={DuolingoLogo} alt="Duolingo logo" />
                        </div>
                        <div className="voucher-wrapper-right-authorized">
                            <img src={AuthorizedLogo} alt="authorized logo" />
                        </div>
                    </div>
                    <div className="checkout-wrapper-right-benefits">
                        <h4>{VoucherPageContent.Benefits}</h4>
                        <ul>
                            {Benefits.map((benefit, index) => (
                                <li key={index}>
                                    <span className="benefits-icon">
                                        {SvgIcons.blackCheckIcon}
                                    </span>
                                    <span className="benefits-text">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Voucher;
