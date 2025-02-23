"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:Saurabh@3301@localhost:5432/postgres"
});
client.connect();
console.log("Connected to the database");
function CreateUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        CREATE TABLE Anime(
           id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            episodes INT NOT NULL,
            MainCharacter VARCHAR(100) NOT NULL
        );   
        
    `);
        console.log("here it is");
        console.log(result);
    });
}
//async function to insert data int the database 
function InsertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
         INSERT INTO Anime(name, episodes, MainCharacter) Values('One Piece', 1000, 'Luffy');
         
        `);
    });
}
// CreateUserTable().then(()=>{
//     console.log("Table created");
//     client.end();
// })
InsertData().then(() => {
    console.log("Data inserted");
    client.end();
});
//async function to fetch data from the database based on  the email provided.....
function Fetchdata() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://postgres:Saurabh@3301@localhost:5432/postgres"
        });
        client.connect();
        const result = yield client.query(`
        SELECT * FROM Anime where maincharacter = 'Luffy';
        
    `);
        if (result.rows.length > 0) {
            console.log("data found", result.rows[0]);
        }
        else {
            console.log("No data found");
        }
    });
}
Fetchdata().then(() => {
    console.log("Data fetched successfully");
});
