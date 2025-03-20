import { connectBD } from "../Utils/sql.js";

export const getUsers = async (req, res) => {
    const sql = connectBD();
    const data = await sql.query("select * from users");
    res.json(data.rows);
  };
  
  export const getUser = async (req, res) => {
    const sql = connectBD();
    const query = {
      text: "select * from users where user_id = $1",
      values: [req.params.user_id],
    };
    const data = await sql.query(query);
    res.json(data.rows);
  };
  
  export const postUser = async (req, res) => {
    const {username, first_name, last_name, birthdate, password, email } = req.body;
    const sql = connectBD();
    const query = {
      text: "insert into users(username, first_name, last_name, birthdate, password, email) values($1, $2, $3, $4, $5, $6)",
      values: [username, first_name, last_name, birthdate, password, email],
    };
    const data = await sql.query(query);
    res.json(data.rows);
  };
  
  export const putUser = async (req, res) => {
    const {username, first_name, last_name, birthdate, password, email} = req.body;
    const sql = connectBD();
    const query = {
      text: "update users set username = $1, first_name = $2, last_name = $3, birthdate = $4, password = $5, email, $6 where user_id = $7",
      values: [username, first_name, last_name, birthdate, password, email, req.params.user_id],
    };
    const data = await sql.query(query);
    res.json(data.rows);
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const sql = connectBD();
      const query = {
        text: "delete from users where user_id = $1",
        values: [req.params.user_id],
      };
      await sql.query(query);
      res.status(200).json({ msg: "ya se borro" });
    } catch (error) {
      res.status(500).json({ msg: error.msg });
    }
  };
  