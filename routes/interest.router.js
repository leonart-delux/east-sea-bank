import express from 'express'
import InterestServices from '../services/interest.services.js';

const router= express.Router()

router.get('/RatesAndTerms', async (req, res) => {
    const NonTermInterest= await InterestServices.getNonTermInterest();
    const TermInterest= await InterestServices.getTermInterest();
    const CreditLoanInterest= await InterestServices.getCreditLoanInterest();
    const MortgageInterest= await InterestServices.getMortgageInterest();
    // console.log(NonTermInterest);
    // console.log(TermInterest);
    // console.log(CreditLoanInterest);
    // console.log(MortgageInterest);
    res.render('vwAdmin/interestRatesAndTerms', {
        NonTermInterest:NonTermInterest,
        TermInterest:TermInterest,
        CreditLoanInterest:CreditLoanInterest,
        MortgageInterest:MortgageInterest,
        layout: 'admin'
    });
});

router.get('/RatesAndTermsEdit',async (req, res) => {
    const NonTermInterest= await InterestServices.getNonTermInterest();
    const TermInterest= await InterestServices.getTermInterest();
    const CreditLoanInterest= await InterestServices.getCreditLoanInterest();
    const MortgageInterest= await InterestServices.getMortgageInterest();
    res.render('vwAdmin/ratesAndTermsEdit', {
        NonTermInterest:NonTermInterest,
        TermInterest:TermInterest,
        CreditLoanInterest:CreditLoanInterest,
        MortgageInterest:MortgageInterest,
        layout: 'admin'
    });
});

export default router