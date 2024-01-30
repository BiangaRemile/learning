const express = require('express');

port = 3000

app = express();

// engine
app.set('view engine', 'ejs')
app.set('views')

// views function 
function acceuil(req, res) {
    res.status(200).render('index')
}

app.get('/', acceuil)

app.listen(port, () => console.log(`Server listen in port ${port}`))