import React from 'react';
import './style.css';

import { useEffect, useState } from 'react';


const Pagination = () => {

    //fetching api for table data
    // const [loading, setLoading] = useState(true); //for loading
    let [error, setError] = useState(null);  //for error
    let [tableData, setTableData] = useState([]);

    const API_URL = "https://dummyjson.com/users?limit=100";
    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setTableData(data.users);
                // setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                // setLoading(false);
            })
    }, []);

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            // If total pages are <= 5, show all buttons
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // If more than 5 pages, show pagination with dots
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage, '...', totalPages);
            }
        }

        return pages;
    };

    // if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    // console.log(tableData);

    //Working with Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const indexofLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexofLastRow - rowsPerPage;
    const currentTableData = tableData.slice(indexOfFirstRow, indexofLastRow);
    const totalPages = Math.ceil(tableData.length / rowsPerPage);
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.firstName}</td>
                            <td>{value.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button className='pgBtn' onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
                {getPageNumbers().map((page, index) => (
                    <button className='pgNo-btn'
                        key={index}
                        onClick={() => typeof page === 'number' && setCurrentPage(page)}>
                        {page}
                    </button>
                ))}
                <button className='pgBtn' onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>Next</button>
            </div>
        </>
    )
}

export default Pagination;
