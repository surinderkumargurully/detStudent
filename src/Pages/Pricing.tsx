import { GurullyIcon, MostPopularIcon, PricingAnimatedArrow, PricingFlagImg, PricingHeadingIcon, PricingStarImg, PricingUserImg, 
    // PricingWhatDoColorIcon 
} from "../assets/Images/Images";
import PricingBox from "../Components/Pricing/PricingBox";
import { PricingPageContent } from "../Utils/Constant";
import "../Style/pricing.css";
// import SvgIcons from "../assets/Svg/SvgIcons";
// import PricingWhatDoBox from "../Components/Pricing/PricingWhatDoBox";
import StudentSayBox from "../Components/Pricing/StudentSayBox";

const Pricing = () => {

    // const scrollPricingFeature = () =>{
    //     const section = document.getElementById("pricingFeature");
    //     if (!section) return;
    //     const yOffset = -20;
    //     const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //     window.scrollTo({ top: y, behavior: "smooth" });
    // }

    const PricingDetails = [
        {
            pricingDay:"7",
            pricingCurrency:"INR",
            pricingPrice:"600",
            pricingText:"Go premium for 7 days  no strings, just skills!",
            pricingButtonText:"Checkout",
            pricingClassName:"pricing-box1",
        },
        {
            pricingDay:"15",
            pricingCurrency:"INR",
            pricingPrice:"900",
            pricingText:"15 days of premium—grind, shine, and ace it!",
            pricingButtonText:"Checkout",
            pricingClassName:"pricing-box2",
        },
        {
            pricingDay:"30",
            pricingCurrency:"INR",
            pricingPrice:"1000",
            pricingText:"30 days of premium—grind, shine, and ace it!",
            pricingButtonText:"Checkout",
            pricingClassName:"pricing-box3",
            pricingTagImg:MostPopularIcon,
            pricingTagText:"Most Popular",
        },
        {
            pricingDay:"60",
            pricingCurrency:"INR",
            pricingPrice:"1300",
            pricingText:"15 days of premium—grind, shine, and ace it!",
            pricingButtonText:"Checkout",
            pricingClassName:"pricing-box4",
            pricingTagImg:GurullyIcon,
            pricingTagText:"Gurully’s Choice",
            OfferPrice:"2100",
            pricingOfferText:"Save 25%",
            pricingOfferImg:PricingAnimatedArrow,
        },
    ];
    // const PricingWhatDoBoxContent =[
    //     {
    //         pricingDoCount:"1",
    //         pricingDoBoxTitle:"Full Access to  Mock Tests",
    //         pricingDoBoxText:"Access full-length mock tests and targeted sectional tests to simulate real exam conditions and identify your strengths.",
    //     },
    //     {
    //         pricingDoCount:"2",
    //         pricingDoBoxTitle:"30000+ Practice Questions",
    //         pricingDoBoxText:"Access full-length mock tests and targeted sectional tests to simulate real exam conditions and identify your strengths.",
    //     },
    //     {
    //         pricingDoCount:"3",
    //         pricingDoBoxTitle:"Unlimited AI Scoring Coupons",
    //         pricingDoBoxText:"Access full-length mock tests and targeted sectional tests to simulate real exam conditions and identify your strengths.",
    //         pricingDoCountClass:"",
    //     },
    //     {
    //         pricingDoCount:"4",
    //         pricingDoBoxTitle:"Comprehensive AI Score Cards",
    //         pricingDoBoxText:"Access full-length mock tests and targeted sectional tests to simulate real exam conditions and identify your strengths.",
    //     },
    //     {
    //         pricingDoCount:"5",
    //         pricingDoBoxTitle:"Full Access to  Mock Tests",
    //         pricingDoBoxText:"Access full-length mock tests and targeted sectional tests to simulate real exam conditions and identify your strengths.",
    //         pricingDoCountClass:"what-do-max-width",
    //     },
    //     {
    //         pricingDoCount:"6",
    //         pricingDoBoxTitle:"Full Access to  Mock Tests",
    //         pricingDoBoxText:"Access full-length mock tests and targeted sectional tests to simulate real exam conditions and identify your strengths.",
    //         pricingDoCountClass:"what-do-max-width",
    //     },
    // ];
    const StudentSayBoxContent =[
        {
            StudentSayImg:PricingUserImg,
            StudentSayTitle:"90,000+",
            StudentSayText:" Successful test takers upgraded to Prime",
        },
        {
            StudentSayImg:PricingFlagImg,
            StudentSayTitle:"35+ countries",
            StudentSayText:" Students across the globe trust Gurully for exam prep",
        },
        {
            StudentSayImg:PricingStarImg,
            StudentSayTitle:"4.9/5 rating",
            StudentSayText:"Average across thousands of student reviews",
        }
    ]

    return(
        <>
            <div className="pricing-page-heading">
                <div className="pricing-page-heading-top">
                    <h4>
                        {PricingPageContent.PricingTopHeading}
                        <img src={PricingHeadingIcon} alt="UnlockFullAccess" />
                    </h4>
                    <h1>{PricingPageContent.PricingHeading}</h1>
                    <p>{PricingPageContent.PricingHeadingText}</p>
                </div>
            </div>
            <div className="pricing-wrapper">
                {PricingDetails.map((item,index)=>(
                    <PricingBox 
                        day={item.pricingDay}
                        currency={item.pricingCurrency}
                        price={item.pricingPrice}
                        pricingText={item.pricingText}
                        btnText={item.pricingButtonText}
                        pricingClass={item.pricingClassName}
                        pricingTagImg={item.pricingTagImg}
                        pricingTagText={item.pricingTagText}
                        key={index} 
                        onClick={undefined}    
                        OfferPrice={item.OfferPrice}  
                        pricingOfferImg={item.pricingOfferImg}              
                        pricingOfferText={item.pricingOfferText}              
                    />
                ))}
                
                
            </div>
            <div className="pricing-gst-text pb-0">
                <p>{PricingPageContent.PricingGstText}</p>
                {/* <button onClick={scrollPricingFeature}>
                    {PricingPageContent.SeeFeatures}
                    {SvgIcons.seeFeaturesIcon}
                </button> */}
            </div>
            {/* <div className="pricing-what-do" id="pricingFeature">
                <div className="pricing-what-do-heading">
                    <h2>{PricingPageContent.WhatDoGetHeading}</h2>
                    <p>{PricingPageContent.WhatDoGetHeadingText}</p>
                </div>
                <div className="pricing-what-do-inner">
                    {PricingWhatDoBoxContent.map((item,index)=>(
                        <PricingWhatDoBox 
                            pricingDoCount={item.pricingDoCount} 
                            pricingDoBoxTitle={item.pricingDoBoxTitle} 
                            pricingDoBoxText={item.pricingDoBoxText} 
                            pricingDoCountClass={item.pricingDoCountClass} 
                            key={index}
                        />
                    ))}
                    <div className="pricing-what-do-color-box">
                        <img src={PricingWhatDoColorIcon} alt="PricingWhatDoColorIcon" />
                        <h4>{PricingPageContent.PricingWhatDoColorTitle}</h4>
                        <p>{PricingPageContent.PricingWhatDoColorText}</p>
                    </div>
                </div>
            </div> */}
            <div className="student-say">
                <div className="student-say-heading">
                    <h2>{PricingPageContent.StudentSayHeadingTitle}</h2>
                    <p>{PricingPageContent.StudentSayHeadingText}</p>
                </div>
                <div className="student-say-outer">
                    {StudentSayBoxContent.map((item, index)=>(
                        <StudentSayBox 
                            studentSyaImg={item.StudentSayImg} 
                            studentSyaTitle={item.StudentSayTitle} 
                            studentSyaText={item.StudentSayText} 
                            key={index}                   
                        />
                    ))}
                    
                </div>
            </div>
        </>
    );
}

export default Pricing;