const mongoose = require("mongoose");
const bookC = require("./controllers/bookC");

require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => { 
    console.log("Successfully connected to MongoDB using Mongoose!");
})


controller = require("./controllers/controller")
express = require("express")
app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))
const methodOverride = require("method-override");
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));
app.get("/home", controller.sendReqParam);
app.get("/lab10", controller.sendcss);
app.get("/books/:page", controller.sendbook);
app.get("/deleteABook", controller.sendDelete);
app.get("/addNewBook", controller.sendAdd);
router = express.Router(); 
app.use("/", router);
router.get("/Book/new", bookC.new);
router.post("/Book/create", bookC.create, bookC.redirectView);
router.delete("/Book/:BookID/delete/", bookC.delete, bookC.redirectView); 

app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening on port number: ${app.get("port")}`)

});

