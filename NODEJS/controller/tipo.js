const express = require('express')  
const router = express.Router()  
const { poolPromise } = require('../connection/db')  
const sql = require('mssql')  

router.get('/ApiGetTipos', async (req, res) => 
{  
    try 
    {  
        const pool = await poolPromise  
        const result = await pool.request()  
        .query('select * from tipos',function(err, profileset)
        {  
            if (err)  
            {  
                console.log(err)  
            }  
            else 
            {  
                var send_data = profileset.recordset;  
                res.json(send_data);  
            }  
        })  
    } 
    catch (err) 
    {  
        res.status(500)  
        res.send(err.message)  
    }  
})

router.get('/ApiGetTipo/:i_tipoId', async (req, res) => 
{  
    try 
    {  
        const pool = await poolPromise  
        const result = await pool.request()  
        .input("i_hitoId", sql.VarChar(100), req.params.i_tipoId)  
        .execute("buscarTipo", function (err, recordset)            
        {  
            if (err)  
            {  
                console.log(err)  
            }  
            else 
            {  
                var send_data = profileset.recordset;  
                res.json(send_data);  
            }  
        })    
    } 
    catch (err) 
    {  
        res.status(500)  
        res.send(err.message)  
    }  
})