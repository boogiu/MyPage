import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../utils/api';
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const [logid, setLogid] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhNumber] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] =useState("");
  const navigate = useNavigate();

  const onIDHandler = (event) => {
    setLogid(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
    if (password !== ConfirmPassword) {
      return console.log('다른데?')
    }
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onPhNumberHandler = (event) => {
    setPhNumber(event.currentTarget.value);
  }
  

  const onSubmitHandler = async(event) => {
    
    event.preventDefault();
    try{
      if (password !== ConfirmPassword) {
        throw new Error('비밀번호와 비밀번호 확인이 같지 않습니다.')
      }
      const response = await api.post('/user',{logid,password,name,phonenumber});
      if(response.status == 200){
        navigate('/Login')
      }
      else{
        throw new Error(response.data.error)
      }
    }catch(error){
      setError(error.message);
    }

  }

    return (
      <Container>
        <ResisterBox>
          <PageInfo>
            <h1>회원가입 </h1>
            <p>오럼의 구성원만 로그인 및 회원가입이 가능합니다.</p>
            {error && <p style={{color : "red"}}>{error}</p>}
          </PageInfo>
          
          <FormBox onSubmit={onSubmitHandler}>
            <ResisterDiv>
              <PlaceHold>아이디</PlaceHold>
              <InputBox
                type='text'
                name='ID'
                placeholder='아이디를 입력해주세요'
                value={logid}
                onChange={onIDHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <PlaceHold>비밀번호</PlaceHold>
              <InputBox
                type='text'
                name='비밀번호'
                placeholder='비밀번호를 입력해주세요'
                value={password}
                onChange={onPasswordHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <PlaceHold>비밀번호 확인</PlaceHold>
              <InputBox
                type='text'
                name='비밀번호 확인'
                placeholder='비밀번호를 한번 더 입력해주세요요'
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <PlaceHold>이름</PlaceHold>
              <InputBox
                type='text'
                name='name'
                placeholder='이름을 입력해주세요'
                value={name}
                onChange={onNameHandler}
              />
            </ResisterDiv>
            <ResisterDiv>
              <PlaceHold>휴대폰</PlaceHold>
              <InputBox
                type='text'
                name='PhNumber'
                placeholder='숫자만 입력해주세요'
                value={phonenumber}
                onChange={onPhNumberHandler}
              />
            </ResisterDiv>
            <StyleBtn type="submit"> 
                회원가입
            </StyleBtn>
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
const PageInfo = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  padding : 10% 10%;
  text-align : center;
  
`

  const ResisterBox = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
  padding : 10% 30%;
  @media screen and (max-width: 900px) {
    padding : 5%;
  }
`

  const FormBox = styled.form`
  ${({ theme }) => theme.common.flexCenterColumn};
  width : 100%;
`
  const ResisterDiv = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  justify-content : center;
  width : 100%;
  margin : 25px;
  @media screen and (max-width: 900px) {
    ${({ theme }) => theme.common.flexCenterColumn};
    align-items : flex-start;
  }
`
const PlaceHold = styled.p`
  display: flex;
  width: 250px;;
  padding: 14px;
  align-items: center;
  color: white;
`
  const InputBox = styled.input`
  display: flex;
  width: 340px;
  padding: 14px;
  align-items: center;
  border-radius: 4px;
  background: #232323;
  color: white;
`
const StyleBtn = styled.button` 
  width : 80%;
  padding : 20px;
  background: #303030;
  color : white;
  margin : 15px;
  border-radius: 4px;
  padding: 14px;
  justify-content: center;
  align-items: center;
`