import SvgIcons from "../../assets/Svg/SvgIcons";
import { ConstantText } from "../../Utils/Constant";

const MockTestInfo = () => {
    const mockInfoData = [
        {
            icon: SvgIcons.TotalTestIcon,
            text: ConstantText.TotalTests,
            testCount: 150,
        },
        {
            icon: SvgIcons.CompletedTestIcon,
            text: ConstantText.Completed,    
            testCount: 23,
        },
        {
            icon: SvgIcons.PausedTestIcon,
            text: ConstantText.PausedTests,
            testCount: 150,
        },
        {
            icon: SvgIcons.NotStartedTestIcon,
            text: ConstantText.NotStarted,
            testCount: 150,
        },
    ];


    return(
        <>
            <div className="mock-test-info">
                
                    {mockInfoData.map((item, index) => (
                        <div className="mock-test-info-box" key={index}>
                            <div className="mock-test-info-icon">{item.icon}</div>
                            <p>
                                {item.text } : 
                                <span className="mock-test-info-count"> { item.testCount}</span>
                            </p>
                        </div>
                    ))}
                    
                
            </div>
        </>
    );
}       
export default MockTestInfo;