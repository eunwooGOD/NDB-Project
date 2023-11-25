const express = require('express');
const app = express();


const indexRouter = require('./routes') //index는 default값 이기 때문에 생략이 가능
const userRouter = require('./routes/user')

const path = require("path");
const cors = require('cors')

// post 방식으로 데이터 주고 받기 위한 body-parser
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'dist')));

// cors 오류 해결을 위한 미들웨어
app.use(cors());
app.use(express.json());
// body-parser 미들웨어 대체 express 내장 모듈
app.use(express.urlencoded({extended : true}))

// router 
app.use('/user', userRouter);
app.use('/', indexRouter);






// 서버 포트번호
app.set('port', process.env.PORT|| 3002);

app.listen(app.get('port'),()=>{
    console.log('port waiting ...')
});