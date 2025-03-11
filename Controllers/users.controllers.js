import {query} from "express";
import { connectBD } from "../Utils/sql.js";

export const getUsers = async(req,res) => {
    const sql = connectBD();
    const data = await sql.query("select * from users");
    console.log(data.rows);
    res.json(data.rows);
};

export const getUser = async(req, res) => {
    const sql = connectBD();
    const query = {
        text:"SELECT * FROM users WHERE user_id = $1", 
        values: [req.params.user_id],
    };
    const data = await sql.query(query);
    console.log(data.rows);
    res.json(data.rows);
};

export const postUser = async(req, res) => {
    const[name, username,password] = req.body;
    const sql = connectDB();
    const query = {
        text:"INSERT into users(name,username,password); values($1,$2,$3)", 
        values: [req.params.user_id],
    };
    const data = await sql.query(query);
    console.log(data.rows);
    res.json(data.rows);
};

export const putUser = async(req, res) => {
    const[name, username,password] = req.body;
    const sql = connectDB();
    const query = {
        text:"UPDATE set name = $1, username = $2, password$3, where user_id = $4", 
        values: [req.params.user_id],
    };
    const data = await sql.query(query);
    console.log(data.rows);
    res.json(data.rows);
};

export const deleteUser = async(req, res) => {
    const[name, username,password] = req.body;
    const sql = connectDB();
    const query = {
        text:"UPDATE set name = $1, username = $2, password$3, where user_id = $4", 
        values: [req.params.user_id],
    };
    const data = await sql.query(query);
    console.log(data.rows);
    res.json(data.rows);
};