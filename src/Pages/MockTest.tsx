import SvgIcons from "../assets/Svg/SvgIcons";
import MockTestInfo from "../Components/MockTest/MockTestInfo";
import { ConstantText, MockTestPageContent } from "../Utils/Constant";
import "../Style/mockTest.css";
import MockTestSelect from "../Components/MockTest/MockTestSelect";

const MockTest = () => {
    return(
        <>
            <h1>{ConstantText.MockTest}</h1>
            <MockTestInfo />
            <div className="mock-test-filter">
                <div className="filter-icon">
                    {SvgIcons.FilterIcon}
                </div>
                <div className="level-filter-select mock-filter-select">
                    <MockTestSelect 
                        defaultValue={MockTestPageContent.Levels} 
                        label={MockTestPageContent.DifficultyLevels} 
                        options={["All", "Easy", "Medium", "Hard"]} />   
                </div>
                <div className="status-filter-select mock-filter-select"></div>
            </div>
        </>
    );
}

export default MockTest;