// 유저와 관련된 router들
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('user router')
})
//DB 연결
const conn = require("../config/database");

// 로그인 라우터
router.post("/login", (req, res) => {
    console.log("login Router", req.body);
  
    let id = req.body.userId;
    let pw = req.body.userPw;
  
    let sql =
      "select id,user_name,email from project_member where id=? and pw = ?";
  
    conn.query(sql, [id, pw], (err, rows) => {
      console.log("db응답", rows);
  
      if (rows > 0) {
        res.json({ msg: "success", user: rows[0] });
      } else {
        res.json({ msg: "failed" });
      }
    });
  });
module.exports = router
