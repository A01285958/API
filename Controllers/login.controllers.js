import { connectBD } from "../Utils/sql.js";
import {hashPassword} from "../Utils/Hash.js";

export const login = async(req, res) => {
    const sql = connectBD();
    const query = {
        text:"SELECT * FROM users WHERE username = $1 ", 
        values: [req.body.username],
    };
    const data = await sql.query(query);
    if(data.rows.length === 0){
        res.json({islogin: false, user:{}});
        return;
    }

    const salt = data.rows[0].password.substring(0, process.env.SALT);
    const hash = hashPassword(req.body.password, salt);
    const saltconhash = salt + hash;
    
    if(String(saltconhash) === String(data.rows[0].password.trim()))
        {
        res.json({islogin: true, user:data.rows[0]});;
        return;
    } 
    else
    {
        res.json({islogin: false, user: {}});
    }
};