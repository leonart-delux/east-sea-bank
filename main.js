import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000; // Đảm bảo cổng đã được định nghĩa

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('manageUsers',{
      layout: 'admin'
    });
});
app.get('/User', (req, res) => {
  res.render('customerInfor', {
      layout: 'admin'
  });
});
app.get('/Loans', (req, res) => {
  res.render('loanManagement', {
      layout: 'admin'
  });
});
app.get('/Savings', (req, res) => {
  res.render('savingManagement', {
      layout: 'admin'
  });
});
app.get('/RatesAndTerms', (req, res) => {
  res.render('interestRatesAndTerms', {
      layout: 'admin'
  });
});
app.get('/RatesAndTermsEdit', (req, res) => {
  res.render('ratesAndTermsEdit', {
      layout: 'admin'
  });
});
app.get('/Statistics', (req, res) => {
  res.render('statistics', {
      layout: 'admin'
  });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});