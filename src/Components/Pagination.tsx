import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <div className={`cursor-pointer border border-slate-400 rounded-xl p-2 ${currentPage <= 1 ? ' invisible' : ''}`} onClick={() => { onPageChange(currentPage - 1) }}>
                Prev
            </div>

            <ul className='flex overflow-auto space-x-3 px-2'>
            {pages.map((page) => (
                <li
                    key={page}
                    className={`w-12 border border-slate-400 rounded-xl p-2 ${page === currentPage ? 'bg-gray-900 text-white' : ''}`}
                >
                    <button
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                </li>
            ))}
            </ul>

            <div className={`cursor-pointer border border-slate-400 rounded-xl p-2 ${currentPage >= totalPages ? ' invisible' : ''}`} onClick={() => { onPageChange(currentPage + 1) }}>
                Next
            </div>
        </>
        
    );
}

export default Pagination;
