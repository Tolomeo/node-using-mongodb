import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import { routes } from './src/routes/routes'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

routes(app);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
