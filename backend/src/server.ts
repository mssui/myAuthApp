import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
    AuthenticatedRequest,
    authMiddleware,
} from "./middleware/auth";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get(
  "/me",
  authMiddleware,
  (req: AuthenticatedRequest, res) => {
    res.json({
      user: req.user,
    });
  }
);



app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Backend running 🚀",
  });
});

// app.get("/health", (_req, res) => {
//   res.send("HELLO TEST");
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});