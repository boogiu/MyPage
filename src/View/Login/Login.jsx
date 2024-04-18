import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../utils/api';
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [logid, setLogid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] =useState("");
  const [user, setUser] =useState(null)

  const navigate = useNavigate();

  const onIDHandler = (event) => {
    setLogid(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  
  

  const onSubmitHandler = async(event) => {
    
    event.preventDefault();
    try{
      const response = await api.post('/user/login',{logid,password});
      if(response.status == 200){
        setUser(response.data.user)
        sessionStorage.setItem("token",response.data.token)
        api.defaults.headers["authorization"]= "Bearer " +response.data.token;
        setError("")
        navigate('/')
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
            <h1>로그인 </h1>
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
            
            <StyleBtn type="submit"> 
                로그인
            </StyleBtn>
          </FormBox>
        </ResisterBox>
      </Container>
    );
  };

  export default Login;

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