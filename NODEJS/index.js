var sql = require ('mssql');

var dbConfig =
{
    server: 'localhost\\MSSQLSERVER2017'
    , database: 'SJCC'
    , user: 'sa'
    , password: 'Intergrupo2017.*'
    , port: 52684
}

function getTipos()
{
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);
    
    conn.connect (function (err) 
    {
        if (err) 
        {
            console.log(err);
            return;     
        }
        req.query("SELECT * FROM tipos", function(err, recordset) 
        {
            if (err) 
            {
                console.log(err);    
            }
            else 
            {
                console.log(recordset)
            }
            conn.close();
        });
    });
}

function insertTipo()
{
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);
    
    conn.connect (function (err) 
    {
        if (err) 
        {
            console.log(err);
            return;     
        }
        req.query("INSERT INTO [dbo].[tipos] ([s_descri]) VALUES ('TIPO C')", function(err, recordset) 
        {
            if (err) 
            {
                console.log(err);    
            }
            else 
            {
                console.log(recordset)
            }
            conn.close();
        });
    });
}

insertTipo();
getTipos();