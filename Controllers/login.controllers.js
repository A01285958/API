import { connectBD } from "../Utils/sql.js";

export const login = async(req,res) => {
    const sql = connectBD();
    const query = {
    text: "select * from users where username=$1",
    values: [req.body.username],
    };
    const data = await sql.query(query);
    if(req.body.password === data.rows.password){
        res.json({isLogin: true, user: data.rows});
        return;
    } else{
    res.json({isLogin: false, user: {}});
    }
};
