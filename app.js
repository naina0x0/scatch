const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
require("dotenv").config();
const db = require("./config/mongoose-connection");
const expressSession = require("express-session");
const flash = require("connect-flash");
const helmet = require('helmet');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(expressSession({

secret:process.env.JWT_KEY,
resave:false,
saveUninitialized:false,

}));
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' https://fonts.googleapis.com");
//     next();
//   });
  
// app.use(
//     helmet.contentSecurityPolicy({
//       directives: {
//         defaultSrc: ["'none'"],
//         fontSrc: ["'self'", "data:"],
//       },
//     })
//   );

app.listen(3000);