import { getNews } from "../helpers/getNews";
import { types } from "../types/types";

export const startLoadingNews = (technology, page) =>{
    return async(dispatch)=>{
        
        const notices = await getNews(technology,page);

        dispatch(setNews(notices));
    }
}

export const startLoadingFavsNews = () =>{
    return(dispatch) =>{
        const existLocalStorage = localStorage.getItem('noticiasFavoritas');
        if(!existLocalStorage){
            localStorage.setItem('noticiasFavoritas',JSON.stringify([]))
        }else{
            let datosEnLocalStorage = localStorage.getItem('noticiasFavoritas');
            datosEnLocalStorage = JSON.parse(datosEnLocalStorage);
            dispatch(loadFavNews(datosEnLocalStorage))
        }
    }
}
export const startAddFavNews = (objectID, notice) =>{
    
    return (dispatch,getState) =>{
        
        
        dispatch(addFavNews(objectID, notice));
        const favsNotices = getState().notice.favsNotices;
        localStorage.setItem('noticiasFavoritas',JSON.stringify(favsNotices));
    }
}

export const startDeleteFavNews = (objectID) =>{
    return (dispatch,getState) =>{
        
        
        dispatch(deleteFavNews(objectID));
        const favsNotices = getState().notice.favsNotices;
        localStorage.setItem('noticiasFavoritas',JSON.stringify(favsNotices));
    }
}
export const setNews = (news) =>({
    type: types.noticeSetNews,
    payload: news
})

export const addFavNews = (objectID, notice) =>({
    type: types.noticeAddFavNews,
    payload: {
        objectID,
        ...notice
    }
})

export const deleteFavNews = (objectID) => ({
    type: types.noticeDeleteFavNews,
    payload: objectID
})

export const loadFavNews = (news) =>({
    type: types.noticeLoadFavNews,
    payload: news
})