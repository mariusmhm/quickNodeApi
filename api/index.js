
const express = require("express")

const app = express();
app.use(express.json());


app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/longresponse", (request, response) => 
    setTimeout(() => {
        response.send({info: "this should take 9 seconds"})
    }, 9000)
 );
app.get("/shorterresponse", (request, response) => 
    setTimeout(() => {
        response.send({info: "this should take 6.5 seconds"})
    }, 6500)
 );


// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;