export default function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}){
    const annualData = [];
    let investmentValue=initialInvestment;
    for(let i=0;i<duration;i++){
        const interestEarnedinYear=investmentValue*(expectedReturn/100);
        investmentValue += interestEarnedinYear + annualInvestment;
        annualData.push({
            year:i+1,
            interest:interestEarnedinYear,
            valueEndOfYear:investmentValue,
            annualInvestment:annualInvestment
        })
    }
    return annualData;
}
export const formatter=new Intl.NumberFormat({
    style:'currency',
    currency:'USD',
    minimumFractionDigits:0,
    maximumFractionDigits:0,
});