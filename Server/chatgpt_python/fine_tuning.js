//import OpenAI from "openai";
//import fs from "fs";
//import dotenv from "dotenv";
const OpenAI = require("openai");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

(async function chatgptFineTuning() {

    // 1. upload file to OpenAI
    /*
    await openai.files.create({
        file: fs.createReadStream("data.jsonl"),
        purpose: "fine-tune"
    });
    */
   
    // 2. List Files
    const files = await openai.files.list();
    console.log(files);

    // 3. Fine Tune
    const requestData = {
        training_file: "file-RoLegyv8yI532mFsXiycZorB",
        model: "gpt-3.5-turbo-0613"
    };

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    };

    fetch("https://api.openai.com/v1/fine_tuning/jobs", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestData)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Response:", data);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
    

})();




