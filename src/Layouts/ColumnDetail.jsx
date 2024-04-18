import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import styled from 'styled-components';
const ColumnDetail = () => {
    const { idx } = useParams();
    const [column, setColumn] = useState({});
    const [nextColumn, setNextColumn] = useState({});
    const [prevColumn, setPrevColumn] = useState({});

    const [isNew, setisNew] = useState(false);
    const [isLast, setisLast] = useState(false);

    const navigate = useNavigate();

    const getContent = async () => {
        try {
            const resp = await api.get(`/columns/${idx}`);
            const data = resp.data;
            setColumn(data.data);
            if (data.previousColumn) {
                setPrevColumn(data.previousColumn)
                setisLast(false)
            }
            else {
                setisLast(true)
            }
            if (data.nextColumn) {
                setNextColumn(data.nextColumn)
                setisNew(false)

            } else {
                setisNew(true)

            }
        } catch (error) {
            console.error("Error fetching column data:", error);
        }
    };

    useEffect(() => {
        getContent();
    }, [idx]);

    const formattedDate = new Date(column.createdAt).toLocaleDateString('ko-KR');

    const handleNav = (type, id) => {
        if (isNew && type === "next") {
            alert("다음 글이 없습니다람쥐.");
        }
        else if (isLast && type === "pre") {
            alert("이전 글이 없습니다람쥐.");
        }
        else {
            navigate(`/columns/${id}`);

        }
    }

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={() => handleNav("pre", prevColumn._id)}>이전글</Button>
                <Button onClick={() => handleNav("목록", "")}>목록</Button>
                <Button onClick={() => handleNav("next", nextColumn._id)}>다음글</Button>
            </ButtonContainer>
            <ContentDiv>
                <HeaderDiv>
                    <p>{column.Tag}</p>
                    <h1>{column.Title}</h1>
                    <p>{formattedDate}</p>
                </HeaderDiv>
                <ContentBox>
                    <ContentP>{column.content}</ContentP>
                </ContentBox>
            </ContentDiv>
        </Container>
    );
};

export default ColumnDetail;

const Container = styled.div`
    background: ${({ theme }) => theme.colors.BoxColor};
    ${({ theme }) => theme.common.flexCenterColumn};
    width: 100%;
    height: auto;
    color: white;
`;

const ContentDiv = styled.div`
    ${({ theme }) => theme.common.flexCenterColumn};
    padding : 10% 5%;
    width : 100%;
`
const HeaderDiv = styled.div`
    ${({ theme }) => theme.common.flexCenterColumn};
    gap : 15px;
    margin : 50px 0px;
    text-align : center;
    width : 100%;
`
const ContentBox = styled.div`
    ${({ theme }) => theme.common.flexCenterColumn};
    gap : 15px;
    text-align : start;
    width : 100%;
`
const ContentP = styled.p`
    width : 100%;
    white-space: pre-line;
`


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10% 0;
    background: #F4F4F4;
`;

const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    margin: 0px 10px;
    &:hover {
        background-color: #3a64d7;
    }
`;