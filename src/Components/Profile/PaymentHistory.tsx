import { Link } from "react-router-dom";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { ConstantText, ProfilePageTooltip } from "../../Utils/Constant";
import { NoInvoiceFound } from "../../assets/Images/Images";




const PaymentHistory = () => {
    return(
        <>
            <div className="profile-content payment-history-content">
                <div className="profile-edit-information-box">
                    <h4>
                        {ConstantText.invoicesHeading}
                    </h4>
                </div>
                <div className="payment-history">
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <p>{ConstantText.ItemName}</p>
                                    </th>
                                    <th>
                                        <p>{ConstantText.Price}</p>
                                    </th>
                                    <th>
                                        <p>{ConstantText.PaymentDate}</p>
                                    </th>
                                    <th>
                                        <p>{ConstantText.ExpiryDate}</p>
                                    </th>
                                    <th>
                                        <p>
                                            {ConstantText.Status}
                                            <span className="custom-tooltip custom-tooltip-right">
                                                {SvgIcons.grayInfoIcon}
                                                <span className="custom-tooltip-content">
                                                    {ProfilePageTooltip.PaymentHistoryStatus}
                                                </span>
                                            </span>
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Gurully Prime Access : 7 - Day</p>
                                    </td>
                                    <td>
                                        <p>INR 708</p>
                                    </td>
                                    <td>
                                        <p>07 Oct 2025</p>
                                    </td>
                                    <td>
                                        <p>04 Sept 2025</p>
                                    </td>
                                    <td>
                                        <Link className="download-link" download target="_blank" rel="noopener noreferrer" to="https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf">
                                            {SvgIcons.downloadIcon}
                                            <span>{ConstantText.Download}</span>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Gurully Prime Access : 7 - Day</p>
                                    </td>
                                    <td>
                                        <p>INR 708</p>
                                    </td>
                                    <td>
                                        <p>07 Oct 2025</p>
                                    </td>
                                    <td>
                                        <p>04 Sept 2025</p>
                                    </td>
                                    <td>
                                        <p className="payment-processing">
                                            {SvgIcons.paymentLoaderIcon}
                                            {ConstantText.Pending}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Gurully Prime Access : 7 - Day</p>
                                    </td>
                                    <td>
                                        <p>INR 708</p>
                                    </td>
                                    <td>
                                        <p>07 Oct 2025</p>
                                    </td>
                                    <td>
                                        <p>04 Sept 2025</p>
                                    </td>
                                    <td>
                                        <Link className="download-link" download target="_blank" rel="noopener noreferrer" to="https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf">
                                            {SvgIcons.downloadIcon}
                                            <span>{ConstantText.Download}</span>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="not-found-invoice-row">
                                    <td colSpan={5}>
                                        <div className="not-found-invoice">
                                            <img src={NoInvoiceFound} alt="NoInvoiceFound" />
                                            <h4>{ConstantText.NoInvoicesFound}</h4>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentHistory;