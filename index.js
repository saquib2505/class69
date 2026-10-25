
const express = require('express');
const app = express();
const port = 3000;

const loginController = require("./controllers/loginController");
const registrationController = require("./controllers/registrationController");
const productController = require("./controllers/productController");

function checker(req, res, next){
    console.log(req.headers)
}
app.use(express.json())
app.get('/login', loginController);
app.get('/registration', registrationController);
app.get('/products', productController);
app.get('/',checker,(req,res)=>{
    console.log(req);
    res.send("hello i am a new user");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
