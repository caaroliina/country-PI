import style from './CardContainer.module.css';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import { setPage } from '../../redux/action';
import { useLocation } from 'react-router-dom';

const CardContainer = () => {
    const countries =  useSelector(state => state.countries)
    const dispatch = useDispatch();
    const { currentPage, totalPages, itemsPerPage } = useSelector(
    (state) => state.pagination);
    const { pathname } = useLocation();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageCountries = countries.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    };
    return (
        <div className={style.container}>
            
            {   currentPageCountries?.map(country => {
                    return (
                        <Card 
                            key= { country.id }
                            id= { country.id }
                            name= { country.name }
                            flagImg= { country.flagImg }
                            capital= { country.capital }
                            subregion= { country.subregion }
                            population= { country.population }
                        /> 
                    )
                })
            }
            { !pathname.includes('detail') &&
                <div className={ style.paginado }>
                    <Paginado
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            }
        </div>
    )
}

export default CardContainer;