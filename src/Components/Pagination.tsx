import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <ul className='flex overflow-auto space-x-3 px-2'>
        {pages.map((page) => (
            <li
                key={page}
                className={`border border-black p-2 ${page === currentPage ? 'bg-white' : ''}`}
            >
            <button
                onClick={() => onPageChange(page)}
            >
                {page}
            </button>
            </li>
        ))}
        </ul>
    );
};

export default Pagination;
