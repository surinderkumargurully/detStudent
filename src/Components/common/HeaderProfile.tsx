import Dropdown from 'react-bootstrap/Dropdown';
import SvgIcons from '../../assets/Svg/SvgIcons';
import { ConstantText } from '../../Utils/Constant';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';
import { GurullyUrls } from '../../Utils/Url';



const HeaderProfile = () => {
    
    return (
        <Dropdown className="header-profile-dropdown">
            <Dropdown.Toggle className="profile-header" id="dropdown-profile-button">
                <ProfileImage onClick={undefined} />
                <ProfileName />
                <span className="down-arrow-icon">
                    {SvgIcons.downArrowIcon}
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/profile">
                    <span>{SvgIcons.ProfileIcon}</span>
                    {ConstantText.Profile}
                </Dropdown.Item>
                <Dropdown.Item href="#">
                    <span>{SvgIcons.SettingsIcon}</span>
                    {ConstantText.Setting}
                </Dropdown.Item>
                <Dropdown.Item href={GurullyUrls.HelpDeskLink} target="_blank">
                    <span>{SvgIcons.HelpdeskIcon}</span>
                    {ConstantText.Helpdesk}
                </Dropdown.Item>
                <Dropdown.Item href="#" className="logout-item">
                    <span>{SvgIcons.LogoutIcon}</span>
                    {ConstantText.Logout}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default HeaderProfile; 