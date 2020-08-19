const express = require('express')  
const router = express.Router()  
const { poolPromise } = require('../connection/db')  
const sql = require('mssql')  
router.get('/ApiProfileGet', async (req, res) => 
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

router.get('/ApiGetHitos', async (req, res) => 
{  
    try 
    {  
        const pool = await poolPromise  
        const result = await pool.request()  
        .query('select * from hitos',function(err, profileset)
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

/**/
router.post('/ApiProfilePost', async (req, res) => 
{  
    try 
    {  
        const pool = await poolPromise  
        const result = await pool.request()  
        .input("s_nombreProyecto", sql.VarChar(100), req.body.s_nombreProyecto)  
        .input("f_fechaIngreso", sql.DateTime, req.body.f_fechaIngreso)  
        .input("i_tipo", sql.Int, req.body.i_tipo)  
        .input("s_descripcion", sql.VarChar(100), req.body.s_descripcion) 
        .input("f_fechaCumplimiento", sql.DateTime, req.body.f_fechaCumplimiento)
        .input("s_cumplio", sql.VarChar(1), req.body.s_cumplio)
        .input("s_observacionesCumplimiento", sql.VarChar(100), req.body.s_observacionesCumplimiento)  
        .execute("insertarHito").then(function (recordSet) 
        {  
            res.status(200).json({ status: "Success" })  
        })  
    } 
    catch (err) 
    {  
        res.status(500)  
        res.send(err.message)  
    }  
    })
    
    router.post('/ApiUpdateHito', async (req, res) => 
    {  
        try
         { 
            const pool = await poolPromise  
            const result = await pool.request()  
            .input("i_hitoId", sql.VarChar(100), req.body.i_hitoId)  
            .input("s_nombreProyecto", sql.VarChar(100), req.body.s_nombreProyecto)  
            .input("f_fechaIngreso", sql.DateTime, req.body.f_fechaIngreso)  
            .input("i_tipo", sql.Int, req.body.i_tipo)  
            .input("s_descripcion", sql.VarChar(100), req.body.s_descripcion) 
            .input("f_fechaCumplimiento", sql.DateTime, req.body.f_fechaCumplimiento)
            .input("s_cumplio", sql.VarChar(1), req.body.s_cumplio)
            .input("s_observacionesCumplimiento", sql.VarChar(100), req.body.s_observacionesCumplimiento)  
            .execute("actualizarHito").then(function (recordSet) 
            {  
                res.status(200).json({ status: "Success" })  
            })  
        } 
        catch (err) 
        {  
            res.status(500)  
            res.send(err.message)  
        }  
    })

    router.delete('/ApiDeleteHito', async (req, res) => 
    {  
        try 
        {  
            const pool = await poolPromise  
            const result = await pool.request()  
            .input("i_hitoId", sql.VarChar(100), req.body.i_hitoId)  
            .execute("eliminarHito").then(function (err, recordSet)            
            {  
                res.status(200).json({ status: "Success" })  
            })  
        } 
        catch (err) 
        {  
            res.status(500)  
            res.send(err.message)  
        }  
    })
module.exports = router;