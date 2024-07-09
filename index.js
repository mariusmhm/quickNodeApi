
const express = require("express")

const app = express ();
app.use(express.json());


app.get("/longresponse", (request, response) => {
    setTimeout(() => {
        response.send({info: "this should take 15 seconds"})
    }, 15000)
 });


// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
