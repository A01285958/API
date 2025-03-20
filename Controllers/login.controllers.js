import { connectBD } from "../Utils/sql.js";

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
    
    if(String(req.body.password.trim()) === String(data.rows[0].password.trim()))
        {
        res.json({islogin: true, user:data.rows[0]});;
        return;
    } 
    else
    {
        res.json({islogin: false, user: {}});
    }
};