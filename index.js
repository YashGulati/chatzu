var app = require('express')()

app.get('*', (req,res) => {
  res.send('Hello World')
})

app.listen( process.env.PORT , function(){
    console.log("Server Listening on port 80...");
});
console.log('Working');
