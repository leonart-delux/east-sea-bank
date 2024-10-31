import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('./public'));

// Home page routing
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});