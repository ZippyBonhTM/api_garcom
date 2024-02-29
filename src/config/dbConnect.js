import express from "express";

const conection = express();

conection.listen(process.env.DB_URL_CONNECTION, () => {
    console.log("Banco Conectando.");
});

export default conection;
