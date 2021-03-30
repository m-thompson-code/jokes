'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.post('/cow', (req, res) => {
    const sound = req.body.sound;

    let url = '/assets/cow1.webp';

    if (sound.length > 10) {
        url = '/assets/cow3.gif';
    } else if (sound.length > 5) {
        url = '/assets/cow4.gif';
    } else if (sound === 'quack') {
        url = '/assets/cow2.gif';
    }

    console.log(sound, '=>', url);

    res.json({
        url,
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
});
