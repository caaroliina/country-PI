import style from './Paginado.module.css'

const Paginado = ({currentPage, totalPages, onPageChange }) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    
    const handlePageClick = (page) => {
        onPageChange(page);
        };
    
        return (
        <div className={style.container}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1} className={style.pagSignal}> Previous </button>
            {
                Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button className={style.pagNumber}
                    key={page}
                    onClick={() => handlePageClick(page)}
                    disabled={currentPage === page}
                >
                    {page}
                </button>
                ))
            }
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={style.pagSignal}> Next </button>
        </div>
    );
}

export default Paginado;