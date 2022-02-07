import React from 'react';
import { Pagination } from '@mui/material';

import { Notice } from './Notice';
import { SelectBox } from './SelectBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../actions/select';
import { useEffect } from 'react';
import { startLoadingNews } from '../actions/notice';




export const Notices = () => {

    const dispatch  = useDispatch();

    // const [numberPage, setNumberPage] = useState(1);

    const lastTech = (localStorage.getItem('lastTech') ) ? localStorage.getItem('lastTech') : '';

    const {technologySelected} = useSelector(state => state.select);
    const {pageSelected} = useSelector(state => state.select);

    const {notices} = useSelector(state => state.notice);

    useEffect(() => {
        
      
    }, []);
    

    const handleChange = (e,page) =>{
        e.preventDefault();     


        dispatch(startLoadingNews(lastTech,page));
        dispatch(selectPage(page));
    }




    return (<>
                
                <SelectBox/>
                {
                    (technologySelected === '') ? 
                    (<h1>Seleccione una tecnología</h1>) :
                    (<> 
                        <div className='notices'>
                            {
                                notices.map(notice =>(
                                    <Notice key={notice.objectID} {...notice}/>
                                ))
                               
                            }
                        </div>
                        <Pagination count={10} variant="outlined" shape="rounded" color="primary" className="pagination" onChange={handleChange} page={pageSelected} />
                        <br />
                    </>)                 
                }
               

               
                
            </>);
};
