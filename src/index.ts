import { config } from "dotenv";
import express from "express";
import { bootstrab } from "./app.controller";
import { getIo, ioIntializer } from "./socket-io";

config();

const app = express();
const port = 3000;
bootstrab(app,express)

const server = app.listen(port,()=>{
    console.log("Server is running on ",port);
});

ioIntializer(server);