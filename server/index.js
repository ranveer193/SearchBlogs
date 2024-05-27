import express from 'express';
import { config } from "dotenv";
config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});