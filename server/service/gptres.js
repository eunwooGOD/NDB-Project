const express = require('express');
const router = express.Router();
const db = require("../config/database");
let conn = db.init();
// router.post("/DB_get", function (req, res) {
//     let user_keywords = req.body.find_keywords; // 사용자 입력값 중 키워드 찾기ex) for, addeventListener 등등
//     let select_language = req.body.select_language; // 사용자 선택언어
//     let user_input = req.body.user_input; //사용자 입력값
//     let sql = `SELECT *
//                 FROM QUESTION
//                 WHERE EXAM_LANGUAGE = ? 
//                 AND SEARCH_WORD LIKE ?;`

//     conn.query(sql, [select_language, `%${user_keywords}%`], function (err, rows) {
//         if (!err) {
//             if (rows.length > 0) {
//                 const randomIndex = Math.floor(Math.random() * rows.length);
//                 const randomRow = rows[randomIndex];
//                 console.log("랜덤으로 선택된 행:", randomRow);
//                 res.json(randomRow);
//                 // 이후 randomRow를 사용자에게 제공하는 로직을 추가합니다.

//                 let htmlCode = randomRow.EXAM_HTML; // html 코드 - O
//                 let cssCode = randomRow.EXAM_CSS;   // css 코드 - O
//                 let jsCode = randomRow.EXAM_JS;     // js 코드 - O
//                 let cCode = randomRow.EXAM_C;                                  // c 코드 - O
//                 let javaCode = randomRow.EXAM_JAVA;                // java 코드 - O
//                 let pythonCode = randomRow.EXAM_PYTHON;              // python 코드 - O
//                 //let exam_id = PK(auto_increment);   // 문제 id - PK
//                 let user_email = req.body.email;          // 유저 id - FK /임의 문제 아이디 
//                 let exam_desc = randomRow.EXAM_CONTENT;// 문제 + 부가설명 - O

//                 let sql2 = `INSERT INTO QUESTION (
//                     EMAIL,EXAM_LANGUAGE, SEARCH_WORD, 
//                     EXAM_CONTENT, EXAM_HTML, EXAM_CSS, EXAM_JS, EXAM_JAVA, 
//                     EXAM_C, EXAM_PYTHON) VALUES (?,?,?,?,?,?,?,?,?,?)`;

//                 conn.query(sql2, [user_email, select_language, user_input, exam_desc,
//                     htmlCode, cssCode, jsCode,
//                     javaCode, cCode, pythonCode], function (err, rows2) {
//                         if (!err) {
//                             console.log("쿼리문 실행 완료", rows2);
//                         } else {
//                             console.log("DB 쿼리문 실행 실패", err);
//                             console.log(user_input, select_language)
//                         }
//                     });
//             } else {
//                 console.log("일치하는 결과가 없습니다.");
//             }
//         }
//         else {
//             console.log("쿼리문 실행실패", err)
//         }
//     })
// })

module.exports = router;