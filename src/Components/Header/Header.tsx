import "./Header.css";
import { DuolingoLogo } from "../../assets/Images/Images";
import ButtonNonPrime from "../common/ButtonNonPrime";
import { ConstantText } from "../../Utils/Constant";
import HeaderProfile from "../common/HeaderProfile";



const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={DuolingoLogo} alt="" />
      </div>
      <div className="header-right">
        <ButtonNonPrime 
          buttonText={ConstantText.UpgradeToPrime} 
          url="/pricing"
        />
        <HeaderProfile />
      </div>
    </header>
  );
};

export default Header;
