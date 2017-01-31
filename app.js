let express = require('express');
let app = express();

let port = process.env.PORT || 1349;

app.listen(port, () => console.log('listening on port ' + port));
