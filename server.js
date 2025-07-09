import express from "express";
import dotenv from "dotenv";
import booksRouter from "./routes/booksRouter.js";
import endpointError from "./middleware/endpointError.js";
import errorHandler from "./middleware/errorHandler.js";
import connectToDb from "./database/db.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

await connectToDb();

app.use("/api/books", booksRouter);

app.use(endpointError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server runs at port: ${port}`);
});