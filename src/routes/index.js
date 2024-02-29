import express from "express";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function route(app) {
    app.route("/").get((req, res) => res.status(200).sendFile(path.join(__dirname, "./public", "index.html")));

    app.use(express.json());
}

export default route;
