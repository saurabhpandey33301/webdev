import { Client } from "pg";

//async function to create a table in the database....
//ye shi dhng se table create krne ka database me postgresql me.....
async function CreateUserTable(){
    const client  = new Client({
        host: "localhost",
        port: 5432,
        user : "postgres",
        password : "Saurabh@3301",
    });

    try {
        await client.connect();
        const result = await client.query(`
            CREATE TABLE Anime(
               id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                episodes INT NOT NULL,
                MainCharacter VARCHAR(100) NOT NULL
            );   
            
        `)
        console.log("here it is");
        console.log(result);
    } catch (error) {
        console.log("Error while creating table", error);
        
    }finally{
        await client.end();
    }

}


//async function to insert data int the database 
// ye shi dhng hai data insert krne ka database me postgresql me.....
async function InsertData() {
    
    const client  = new Client({
        host: "localhost",
        port: 5432,
        user : "postgres",
        password : "Saurabh@3301",
    });
    try {
        await client.connect();
        //sql injestion .......
        const InsertQuery = (`INSERT INTO Anime(name, episodes, MainCharacter) Values($1, $2, $3)`);
        const values = ['One Piece', 1000, 'Luffy'];
        const result  = await client.query(InsertQuery, values) ;
        console.log("Inserted succesfully",result); //output insertion result.
    } catch (error) {
        console.log("Error while inserting data", error);   //output error if any
        
    }finally{
        await client.end();  //close the client connection
    }
}

//calling the function to create table and insert data into the table.............................
// CreateUserTable().then(()=>{
//     console.log("Table created");
//     client.end();
// })
// InsertData().then(()=>{
//     console.log("Data inserted"); 
//     client.end();
// })


//async function to fetch data from the database based on  the main Character provided.....
//ye shi dhng se data fetch krne ka database me postgresql me.....
async function Fetchdata(){
    const client  = new Client({
        host: "localhost",
        port: 5432,
        user : "postgres",
        password : "Saurabh@3301",
    });

    try {
        client.connect();
        const result = await client.query(`
            SELECT * FROM Anime where maincharacter = 'Luffy';   
        `)
        if(result.rows.length > 0){
            console.log("data found", result.rows[0]);
        }else{
            console.log("No data found");
        }

    }catch (error) {
        console.log("Error while fetching data", error);
        
    }finally{
        await client.end();
    }
}

//calling the function to fetch data from the database based on the main character provided.....
Fetchdata().then(()=>{
    console.log("Data fetched successfully");
});


//relationship between the tables in the database........




//Joins in the Database.........
//defining the relationship is easy but joining them is a bit complex........
//joins are used to fetch data from multiple tables based on the relationship between the tables.....

//there are four types of joins in the database........
//1. inner join
//2. left join
//3. right join
//4. full join

//inner join is used to fetch the data from the tables based on the relationship between the tables.....
//left join is used to fetch the data from the left table based on the relationship between the tables.....
//right join is used to fetch the data from the right table based on the relationship between the tables.....
//full join is used to fetch the data from both the tables based on the relationship between the tables.....

//example : give me user details and all of their addresses.....




//transaction in the database........




