import {Pool} from "pg"
import dotenv from "dotenv"
dotenv.config()

// interface Conn{
//     host?:String|undefined,
//     port?:Number|undefined,
//     user?:String|undefined,
//     password?:String|undefined,
//     database?:String|undefined
// }
let conn: any;

if (!conn){
        conn= new Pool({
        host:process.env.PG_HOST,
        port:process.env.PG_PORT,
        user:process.env.PG_USER,
        password:process.env.PG_PASSWORD,
        database:process.env.PG_DATABASE,
    });

}

export default conn;
