var express = require('express'),  
    app = express();  
  
app.use(express.static(__dirname + "E:/"));  
  
app.listen(8080);