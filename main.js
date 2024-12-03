import express from 'express';
import { engine } from 'express-handlebars';
import UsersRouter from './routes/manageUser.router.js';
import LoansRouter from './routes/loan.router.js';
import SavingRouter from './routes/saving.router.js'
import interestRouter from './routes/interest.router.js';

const app = express();
const port = 3000; // Đảm bảo cổng đã được định nghĩa

app.engine('hbs', engine({
  extname: 'hbs',
  helpers:{
      format_number(value) {
          return numeral(value).format('0,0');
      },
      random_generate_string() {
          return generateRandomString();
      },
      formatNumber(value) {
          return numeral(value).format('0,0') + ' VNĐ';
      },
      formatRate(value) {
          return numeral(value).format('0.00%');
      },
      calTotalPassbookMoney(passbook) {
          return passbook.Tien_Goc + passbook.Tien_Lai;
      },
      calPassbookGrowthRate(passbook) {
          return (passbook.Tien_Lai / passbook.Tien_Goc).toFixed(4);
      },
      calTotalPassbooksMoney(passbooks) {
          return passbooks.reduce((sum, passbook) => sum + passbook.Tien_Goc + passbook.Tien_Lai, 0);
      },
      calTotalPassbooksGrowth(passbooks) {
          const totalBaseMoney = passbooks.reduce((sum, passbook) => sum + passbook.Tien_Goc, 0);
          const totalProfit = passbooks.reduce((sum, passbook) => sum + passbook.Tien_Lai, 0);
          if (totalBaseMoney === 0) return 0;
          return (totalProfit / totalBaseMoney).toFixed(4);
      }
  }
}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('',UsersRouter);
app.use('',LoansRouter);
app.use('',SavingRouter);
app.use('',interestRouter);


// app.get('/',async (req, res) => {
//     const list=await userServices.GetAllCustomer();
//     res.render('manageUsers',{
//       list: list,
//       layout: 'admin'
//     });
// });
// app.get('/User',(req, res) => {
//   res.render('customerInfor', {
//       layout: 'admin'
//   });
// });
// app.get('/Loans', (req, res) => {
//   res.render('loanManagement', {
//       layout: 'admin'
//   });
// });
// app.get('/Savings', (req, res) => {
//   res.render('savingManagement', {
//       layout: 'admin'
//   });
// });
// app.get('/RatesAndTerms', (req, res) => {
//   res.render('interestRatesAndTerms', {
//       layout: 'admin'
//   });
// });
// app.get('/RatesAndTermsEdit', (req, res) => {
//   res.render('ratesAndTermsEdit', {
//       layout: 'admin'
//   });
// });
app.get('/Statistics', (req, res) => {
  res.render('vwAdmin/statistics', {
      layout: 'admin'
  });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});