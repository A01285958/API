import "dotenv/config";
import express from "express";
import indexRoutes from "./Routes/index.routes.js";
import usersRoutes from "./Routes/users.routes.js";
import loginRoutes from "./Routes/login.routes.js";


const app = express();
const port = 4000;

console.log(process.env.USER);
app.use(express.json());
app.use(indexRoutes);
app.use(usersRoutes);
app.use(loginRoutes);
app.listen(port, console.log("http://localhost:" + port));
