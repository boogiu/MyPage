import React,{useEffect, useState} from 'react';
import api from '../utils/api';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const ColumnItem = ({selectedTag}) => {
    const [columns, setColumns] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(28); // 4 * 7 = 28

    const GotoDetail=(id)=>{
        navigate(`/columns/${id}`)
    }
    const getColumns = async () => {
        try {
            const response = await api.get("/columns");
            setColumns(response.data.data);
        } catch (error) {
            console.error("Error fetching columns:", error);
        }
    }

    //4*7 카드만 보여야함
    useEffect(()=>{
        getColumns();
    },[]);

    const filteredColumns = selectedTag ? columns.filter(column => column.Tag === selectedTag) : columns;
    const indexOfLastItem = (currentPage * itemsPerPage); //-1해줘야함
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <ItemBoard>
            {filteredColumns.map((column) => (
                <ItemCard key={column._id} onClick={() => GotoDetail(column._id)} >
                    <ItemImg/>
                    <ItemP>{column.Title}</ItemP>
                </ItemCard>
            ))}
            <Pagination>
                {[...Array(Math.ceil(filteredColumns.length / itemsPerPage)).keys()].map(number => (
                    <PageNumber key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </PageNumber>
                ))}
            </Pagination>
        </ItemBoard>
    );
};

export default ColumnItem;

const ItemBoard = styled.div`
    // display: flex;
    // flex-flow: row wrap;
    display : grid;
    grid-template-columns : repeat(4, 1fr);
    justify-content : center;
    gap : 10px;
    padding : 20px 10px;
`
const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    height: 240px;
    width : 220px;
    align-self: stretch;
    border: 1px solid #000;
    
`
const ItemImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    height: 70%;
    width : 100%;
    align-self: stretch;
    border: 1px solid #fff;
`
const ItemP = styled.div`
    display: flex;
    padding: 26px 25px;
    height: 30%;
    width : 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border: 1px solid #fff;
    background: #FFF;
    color : black;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.div`
    cursor: pointer;
    padding: 8px 16px;
    margin: 0 4px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    &:hover {
        background-color: #f0f0f0;
    }
`;