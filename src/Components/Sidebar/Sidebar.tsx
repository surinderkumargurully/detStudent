import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Logo, PricingOfferMenu } from "../../assets/Images/Images";
import SvgIcons from "../../assets/Svg/SvgIcons";
import { ConstantText } from "../../Utils/Constant";

type SidebarProps = {
    name?: string | undefined;
    path?: string | undefined;
    icon?: React.ReactNode | undefined;
    class?: string | undefined;
    offerIcon?: string | undefined;
};

const Sidebar = () => {
    const sidebar: SidebarProps[] = [
        {
            name: ConstantText.Dashboard,
            path: "/dashboard",
            icon: SvgIcons.dashboardIcon,
            class: "dashboard-menu",
        },
        {
            name: ConstantText.MockTest,
            path: "/mock-test",
            icon: SvgIcons.mockTestIcon,
            class: "mock-menu",
        },
        {
            name: ConstantText.Pricing,
            path: "/pricing",
            icon: SvgIcons.priceIcon,
            class: "pricing-menu",
            offerIcon: PricingOfferMenu,
        },
        {
            name: ConstantText.Voucher,
            path: "/voucher",
            icon: SvgIcons.voucherIcon,
            class: "voucher-menu",
        },
        {
            name: ConstantText.VocabBook,
            path: "/vocab-book",
            icon: SvgIcons.VocabBookIcon,
            class: "vocab-book-menu",
        },
        {
            name: ConstantText.KnowledgeZone,
            path: "/knowledge-zone",
            icon: SvgIcons.KnowledgeZoneIcon,
            class: "knowledge-zone-menu",
        },
    ];
    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/dashboard">
                    <img src={Logo} alt="Gurully logo" className="logo-img" />
                </Link>
            </div>
            <nav>
                {sidebar.map((item) => (
                    <NavLink
                        className={item.class}
                        key={item.name}
                        to={item.path!}
                        end={item.path === "/dashboard"}
                    >
                        <span className="sidebar-menu-icon">{item.icon}</span>
                        {item.name}
                        {item.offerIcon && (
                            <span className="item-offer-icon">
                                <img
                                    src={item.offerIcon}
                                    alt="PricingOfferMenu"
                                />
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
