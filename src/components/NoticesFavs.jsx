import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingFavsNews } from '../actions/notice';


import { NoticeFav } from './NoticeFav';



export const NoticesFavs = () => {

    const {favsNotices} = useSelector(state => state.notice);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startLoadingFavsNews());
    }, []);
    
    return <div className='notices'>
    {
        ((favsNotices.length !== 0) ?
            (favsNotices.map(notice =>(
                <NoticeFav key={notice.objectID} {...notice}/>
            ))) :
            (<h1>Aún no tiene noticias favoritas.</h1>)
        )
        
        
    }
</div>;
};
