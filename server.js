import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
// inen for initialize express app
const app = express();
const PORT = process.env.PORT;

//ine for checking if working it api
app.get("/", (req, res) => {
  res.send("this API is working");
});
// pag gamit an atun routes
app.use("/api", bookRoutes);

// pag gamit it port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
