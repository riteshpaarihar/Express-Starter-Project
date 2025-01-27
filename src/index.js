import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDb from "./config/dbConfig.js";
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());



app.post('/hi', (req, res) => {
    console.log(req.body); // Corrected from res.body to req.body
    console.log('Received a POST request');
    res.send('POST request received');
})
app.listen(PORT, async() => {
    await connectDb();
    console.log(`Server is running on port ${PORT}`);
});