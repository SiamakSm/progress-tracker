// apps.js 


const express = require("express");
const skillsRoutes = require("./routes/skills.routes");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
});

app.use("/skills", skillsRoutes);


app.use((req, res, next) => {
    const error = new Error("Route Not Found");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error"
    });
});







module.exports = app;
