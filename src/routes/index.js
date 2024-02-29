import express from "express";


function route(app) {
    app.route("/").get((req, res) => res.status(200).sendFile("./index.html"));

    app.use(express.json());
}

export default route;
