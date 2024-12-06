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

router.post('/updateInterest', async (req, res) => {
    // Chuyển giá trị lãi suất từ chuỗi sang số
    const NonTermInterest = parseFloat(req.body.NonTermInterest);
    const CreditLoanInterest = parseFloat(req.body.CreditLoanInterest);
    const MortgageInterest = parseFloat(req.body.MortgageInterest);
    
    // Các trường TermInterest sẽ ở dạng { TermInterest_6: '3', TermInterest_12: '3.5', ...}
    // Cần chuyển từng giá trị sang số
    const rawTermInterest = req.body;
    delete rawTermInterest.NonTermInterest;
    delete rawTermInterest.CreditLoanInterest;
    delete rawTermInterest.MortgageInterest;

    // Tạo một object mới để lưu trữ lãi suất có kỳ hạn đã parse
    let TermInterest = {};
    for (let key in rawTermInterest) {
        TermInterest[key] = parseFloat(rawTermInterest[key]);
    }

    console.log(NonTermInterest);
    console.log(CreditLoanInterest);
    console.log(MortgageInterest);
    console.log(TermInterest);

    try {
        // Cập nhật lãi suất không kỳ hạn
        await InterestServices.updateNonTermInterest(NonTermInterest);

        // Cập nhật lãi suất tín dụng
        await InterestServices.updateCreditLoanInterest(CreditLoanInterest);

        // Cập nhật lãi suất thế chấp
        await InterestServices.updateMortgageInterest(MortgageInterest);

        // Cập nhật lãi suất có kỳ hạn
        for (let key in TermInterest) {
            const term = key.split('_')[1];  // Thời gian kỳ hạn
            await InterestServices.updateTermInterest(parseFloat(term), TermInterest[key]);
        }

        res.redirect('/admin/RatesAndTerms');
    } catch (error) {
        console.error(error);
        res.status(500).send('Có lỗi xảy ra khi cập nhật lãi suất.');
    }
});

export default router