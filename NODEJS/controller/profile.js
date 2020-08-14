const express = require('express')  
const router = express.Router()  
const { poolPromise } = require('../connection/db')  
const sql = require('mssql')  
router.get('/ApiProfileGet', async (req, res) => {  
try {  
const pool = await poolPromise  
const result = await pool.request()  
.query('select * from tipos',function(err, profileset){  
if (err)  
{  
console.log(err)  
}  
else {  
var send_data = profileset.recordset;  
res.json(send_data);  
}  
})  
} catch (err) {  
res.status(500)  
res.send(err.message)  
}  
})

/**/
module.exports = router;