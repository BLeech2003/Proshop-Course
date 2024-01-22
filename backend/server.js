import path from "path";
import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js"; 
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB(); //Connect to mongDB
const PORT = process.env.PORT;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const _dirname = path.resolve();
app.use("/uploads", express.static(path.join(_dirname, "/uploads")))
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
