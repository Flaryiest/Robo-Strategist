import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";
import helmet from "helmet";
dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(helmet());

app.get("/", (req: Request, res: Response): void => {
  console.log("test");
  res.send("Received Request");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
