<html>
    <h1>Welcome</h1>
</html>

function handleSubmit(){
    <html>
    <h1>Welcome</h1>
</html>

    const name = document.getElementById('name').value;
    const uid = document.getElementById('uid').value;
    const password = document.getElementById('password').value;

const mysql = require("mysql2/promise");

const insertIntoDB = async () => {
    const connection = await mysql.createConnection({
        host: "sql6.freesqldatabase.com",
        user:"sql6450299",
        password:"tg1rkxExpj",
        database:"sql6450299",
        port: "3306",
    })

    try 
    {
        await connection.query
        (
            "INSERT INTO Studetn (Name,uid,password) VALUES ("name","uid","password")"

        );
        console.log("inserted");
    }
    catch(e){
        console.log(e);
    }
};
insertIntoDB()

}
handfleSubmit()