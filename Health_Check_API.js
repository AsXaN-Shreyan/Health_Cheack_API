const express = require('express');
const app = express();
const port = 3306;

app.set('json spaces' , 2);


app.get('/api/health', (req, res) => {
    res.json({
        status: "ok",
        server_time: new Date().toISOString() 
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api/health`);
});
