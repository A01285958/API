import { connectBD } from "../Utils/sql.js";
import {getSalt, hashPassword} from "../Utils/Hash.js";

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
    res.json(data.rows[0]);
  };
  
  export const postUser = async (req, res) => {
    const {username, first_name, last_name, birthdate, password, email, points } = req.body;
    const salt = getSalt();
    const hash = hashPassword(password,salt);
    const saltconhash = salt + hash;
    const sql = connectBD();
    const query = {
      text: `INSERT INTO users (username, first_name, last_name, birthdate, password, email, points) 
           VALUES ($1, $2, $3, $4, $5, $6, $7) 
           RETURNING *`,
      values: [username, first_name, last_name, birthdate, saltconhash, email, points],
    };
    const data = await sql.query(query);
    res.json(data.rows);
  };
  
  export const putUser = async (req, res) => {
    const {username, first_name, last_name, birthdate, password, email, points} = req.body;
    const sql = connectBD();
    const query = {
      text: "update users SET username = $1, first_name = $2, last_name = $3, birthdate = $4, password = $5, email = $6, points = $7 WHERE user_id = $8 RETURNING *",
      values: [username, first_name, last_name, birthdate, password, email, points, req.params.user_id],
    };
    const data = await sql.query(query);
    res.json(data.rows[0]);
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
  