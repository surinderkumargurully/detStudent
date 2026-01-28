type PricingWhatDOProps = {
    pricingDoCount: string | undefined;
    pricingDoBoxTitle: string | undefined;
    pricingDoBoxText: string | undefined;
    pricingDoCountClass?: string | undefined;
};

const PricingWhatDoBox = ({
    pricingDoCount,
    pricingDoBoxTitle,
    pricingDoBoxText,
    pricingDoCountClass,
}: PricingWhatDOProps) => {
    return (
        <>
            <div
                className={
                    "pricing-what-do-box " +
                    (pricingDoCountClass ? pricingDoCountClass : "")
                }
            >
                <div className="pricing-what-do-box-count">
                    {pricingDoCount}
                </div>
                <h4>{pricingDoBoxTitle}</h4>
                <p>{pricingDoBoxText}</p>
            </div>
        </>
    );
};
export default PricingWhatDoBox;
