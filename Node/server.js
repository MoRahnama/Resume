const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'resume.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading resume data');
        }
        const resume = JSON.parse(data);
        res.render('index', { resume });
    });
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
