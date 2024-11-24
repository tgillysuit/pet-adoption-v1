const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Hello, world! - Server");
    res.render('home');
});

app.post('/confirm', (req, res) => {
    const data = req.body; 
    console.log(data);
    res.render('confirmation', { details: data });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
