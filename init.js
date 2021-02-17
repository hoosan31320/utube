import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/User";
import "./models/Comment";

const PORT = 4000 || process.env.PORT;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

  app.listen(PORT, handleListening);