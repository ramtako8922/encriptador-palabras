const mysql=require('mysql2')
const dotenv=require('dotenv')

dotenv.config();

const conection=mysql.createConnection(process.env.DATABASE_URL);

export default conection.primise();