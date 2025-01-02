const express = require('express');
const app = express();
const jwt =express('jsonwebtoken');
const zod = require('zod');

async function getUserData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finaldata = await response.json();
    document.getElementById("userdata").innerHTML = JSON.stringify(finaldata);
}