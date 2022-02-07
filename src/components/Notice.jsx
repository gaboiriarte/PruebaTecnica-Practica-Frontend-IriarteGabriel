import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import { addFavNews, startDeleteFavNews, startAddFavNews} from '../actions/notice';



export const Notice = ({created_at, author, story_title, story_url, objectID}) => {

    
    const dispatch = useDispatch();
    const noteDate = moment(created_at);
    const [likeNotice, setLikeNotice] = useState(false);
    const setStateNotice = () =>{
        if(likeNotice){
            dispatch(startDeleteFavNews(objectID));
        }else{
            // dispatch(addFavNews(objectID,{created_at, author, story_title, objectID})); 
            dispatch(startAddFavNews(objectID,{created_at, author, story_title, story_url}));

        }

        setLikeNotice(!likeNotice);
    }

    return <div className='notice'>
        <div className="notice__body">
            <p className="notice__date">⏰ {noteDate.format('L')} by {author}</p>
            <a href={story_url} className='notice__link' target="_blank"><h3 className="notice__story">{story_title}</h3></a>
        </div>
        <div className="notice__button">
            <div className="notice__icon"><i className={("fa-heart " + (likeNotice ? "fa-solid" : "fa-regular"))} onClick={setStateNotice}></i></div>
        </div>
    </div>;
};
