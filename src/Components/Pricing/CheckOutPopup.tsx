import Modal from "react-bootstrap/Modal";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { CheckoutPageContent, ConstantText } from "../../Utils/Constant";
import { SuccessImg, WrongImg } from "../../assets/Images/Images";

type CheckOutPopupProps = {
    show: boolean;
    onHide: () => void;
    appliedText: string | undefined;
    messageText: string | undefined;
    success: boolean;
};

const CheckOutPopup = ({
    show,
    onHide,
    success,
    appliedText,
    messageText,
}: CheckOutPopupProps) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            className="coupon-apply-modal"
            centered
        >
            <Modal.Body>
                <button onClick={onHide} className="modal-close">
                    {SvgIcons.closeIcon}
                </button>
                <div className="coupon-apply">
                    <div className={success ? "success coupon-apply-img-box" : "failed coupon-apply-img-box"}>
                        {success ? (
                            <img src={SuccessImg} alt="coupon-apply-img" />
                        ) : (
                            <img src={WrongImg} alt="coupon-apply-img" />
                        )}
                    </div>
                    {success && <h5>{appliedText } { ConstantText.Applied}</h5>}
                    <h4 className={success ? "success" : "failed"}>
                        {success
                            ? `${messageText}${CheckoutPageContent.offText}`
                            : CheckoutPageContent.Oops}
                    </h4>
                    <p>
                        {success ? (
                            <>
                                {CheckoutPageContent.couponSuccessMsg.after}
                                <strong>
                                    {
                                        CheckoutPageContent.couponSuccessMsg
                                            .keyword
                                    }
                                </strong>
                                {CheckoutPageContent.couponSuccessMsg.before}
                            </>
                        ) : (
                            CheckoutPageContent.couponErrorMsg
                        )}
                    </p>
                    <div className="coupon-apply-btn">
                        <button onClick={onHide}
                            className={success ? "success-btn" : "failed-btn"}
                        >
                            {success
                                ? CheckoutPageContent.Yay
                                : ConstantText.Close}
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CheckOutPopup;
