
//create server using express import
import express from 'express';
import cors from 'cors';
import { router } from "./routes/route.js"
import bodyParser from 'body-parser';
//create server using express
const app = express();

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
    ],

    allowedHeaders: [
        '*',
    ],
};
//allow all requests from all domains & localhost
app.use(cors(corsOpts));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router);
let port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})



