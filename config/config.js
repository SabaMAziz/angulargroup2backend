// for secret keys
// mongodb+srv://appuser:<password>@cluster2022.k1xxx.mongodb.net/test
let environment = require('dotenv').config()

module.exports ={
    "ATLASDB" : environment.ATLASDB,
    "SECRETKEY" : environment.SECRETKEY 
 }