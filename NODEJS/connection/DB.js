// DB.js config for your database  
const sql = require('mssql')  
const config = 
{
    server: 'localhost\\MSSQLSERVER2017'
    , database: 'SJCC'
    , user: 'sa'
    , password: 'Intergrupo2017.*'
    , port: 52684
  
}  
const poolPromise = new sql.ConnectionPool(config)  
.connect()  
.then(pool => 
    {  
        console.log('Connected to MSSQL')  
    return pool  
})  
.catch(err => console.log('Database Connection Failed! Bad Config: ', err))  
module.exports = 
{  
    sql, poolPromise  
}