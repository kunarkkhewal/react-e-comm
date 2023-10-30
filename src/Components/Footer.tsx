import Pagination from './Pagination';

interface FooterProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

function Footer({ currentPage, totalPages, handlePageChange, }: FooterProps) {
    return (
        <div className="bg-blue-100 border-t border-slate-300 flex justify-between p-4 sm:px-12">
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Footer;
