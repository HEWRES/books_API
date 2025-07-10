import express from "express";
import dotenv from "dotenv";
import booksRouter from "./routes/booksRouter.js";
import endpointError from "./middleware/endpointError.js";
import errorHandler from "./middleware/errorHandler.js";
import connectToDb from "./database/db.js";
import url from "url";
import path from "path";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await connectToDb();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRouter);

app.use(endpointError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server runs at port: ${port}`);
});