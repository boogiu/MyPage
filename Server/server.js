// express 모듈을 불러오는 코드와
// app 이라는 변수에 express를 담는 코드

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// 포트는 해당 서버가 가지고 있고 접속할 수 있게 해주는 일종의 주소
// 반드시 해당 서버에 적용되어 있는 포트로 접근해야만 올바르게 접속할 수 있음
// 포트 번호는 '0~65535' 사이의 정수로된 임의의 숫자만 가능
// 4000이란 포트 번호를 서버에 할당

app.get('/', (req, res) => {
    res.send(`Response Complate`);
})
// 서버를 실행했을 때, 서버 응답을 출력하고 싶다면
// 'app.get' 함수를 이용.
// 여기서 첫번째 인자로 들어간 '/'은 경로를 나타내는 인자
// 해당 경로로 이동했을 때에 응답을 렌더링

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})
// express를 담은 'app'이라는 변수와 할당한 포트를 사용해
// 서버를 읽어오는 코드