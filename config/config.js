// for secret keys
// mongodb+srv://appuser:<password>@cluster2022.k1xxx.mongodb.net/test
require('dotenv').config()

module.exports ={
    "ATLASDB" : process.env.ATLASDB,
    "SECRETKEY" : process.env.SECRETKEY 
}