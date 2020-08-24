// Testing my ssh connections
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("Hello my name is Carlos");
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send("I'm Working!");
});

app.listen(port, () => console.log(`fullStack listening on port ${port}!`));
