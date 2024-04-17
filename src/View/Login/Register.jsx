import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [PhNumber, setPhNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const dispatch=useDispatch();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
    if (Password !== ConfirmPassword) {
      return console.log('다른데?')
    }
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onPhNumberHandler = (event) => {
    setPhNumber(event.currentTarget.value);
  }
  

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("되긴 해")
    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
    }

    let info = {
      email: Email,
      password: Password,
      confirmPassword: ConfirmPassword,
      name: Name,
      phnumbr: PhNumber
    }
    console.log(info);
  }

    return (
      <Container>
        <ResisterBox>
          <div>
            회원가입 <br />
            오럼의 구성원만 로그인 및 회원가입이 가능합니다.
          </div>
          <FormBox onSubmit={onSubmitHandler}>
            <ResisterDiv>
              <p>아이디</p>
              <InputBox
                type='text'
                name='ID'
                placeholder='아이디를 입력해주세요'
                value={Email}
                onChange={onEmailHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <p>비밀번호</p>
              <InputBox
                type='text'
                name='비밀번호'
                placeholder='비밀번호를 입력해주세요'
                value={Password}
                onChange={onPasswordHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <p>비밀번호 확인</p>
              <InputBox
                type='text'
                name='비밀번호 확인'
                placeholder='비밀번호를 한번 더 입력해주세요요'
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <p>이름</p>
              <InputBox
                type='text'
                name='name'
                placeholder='이름을 입력해주세요'
                value={Name}
                onChange={onNameHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <p>휴대폰</p>
              <InputBox
                type='text'
                name='PhNumber'
                placeholder='숫자만 입력해주세요'
                value={PhNumber}
                onChange={onPhNumberHandler}
              />
            </ResisterDiv>
            <button type="submit"> 
                회원가입
            </button>
          </FormBox>
        </ResisterBox>
      </Container>
    );
  };

  export default Register;

  const Container = styled.div`
    background : ${({ theme }) => theme.colors.BoxColor};
    ${({ theme }) => theme.common.flexCenterColumn};
    width : 100%;
    height : 100vh;
    color : white;
    overflow-x : hidden;
`

  const ResisterBox = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  padding : 10% 30%;
`

  const FormBox = styled.form`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
`
  const ResisterDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  justify-content : space-between;
  width : 100%;
`

  const InputBox = styled.input`
  display: flex;
  width: 340px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #232323;
  color: white;
`
