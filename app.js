// Testing my ssh connections
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => console.log(`fullStack listening on port ${port}!`));
