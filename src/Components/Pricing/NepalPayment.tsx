import Modal from "react-bootstrap/Modal";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { NepalPaymentLogo, NepalQRCode } from "../../assets/Images/Images";
import { CheckoutPageContent } from "../../Utils/Constant";
import { Link } from "react-router";

type NepalPaymentPopupProps = {
    show: boolean;
    onHide: () => void;
    payment: number | string ;
};

const NepalPayment = ({ show, onHide, payment }: NepalPaymentPopupProps) => {
    return (
        <Modal
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="nepal-payment-modal"
        >
            <button onClick={onHide} className="modal-close">
                {SvgIcons.closeIcon}
            </button>
            <Modal.Body>
                <div className="nepal-payment">
                    <div className="nepal-payment-logo">
                        <img src={NepalPaymentLogo} alt="Nepal Payment Logo" />
                    </div>
                    <h4>{CheckoutPageContent.PayByQR}</h4>
                    <div className="nepal-qr-code">
                        <img src={NepalQRCode} alt="Nepal QR Code" />
                    </div>
                    <h6>{CheckoutPageContent.TotalAmount}</h6>
                    <h3>{payment} NPR</h3>
                    <p>{CheckoutPageContent.NepalPaymentSuccessMsg} </p>
                    <Link to={"tel:" + CheckoutPageContent.NepalContactNumberTel}>{CheckoutPageContent.NepalContactNumber}</Link>
                    <p>{CheckoutPageContent.NepalConfirmMsg}</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};
export default NepalPayment;
