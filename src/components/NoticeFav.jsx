import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import {  startDeleteFavNews } from '../actions/notice';



export const NoticeFav = ({created_at, author, story_title, story_url,  objectID}) => {

    const dispatch = useDispatch();
    const noteDate = moment(created_at);
    const setStateNotice = () =>{
        if(true){
            dispatch(startDeleteFavNews(objectID));
        }
    }

    return <div className='notice'>
                <div className="notice__body">
                    <p className="notice__date">⏰ {noteDate.format('L')} by {author}</p>
                    <a href={story_url} className='notice__link' target="_blank" rel="noreferrer"><h3 className="notice__story">{story_title}</h3></a>
                    
                </div>
                <div className="notice__button">
                    <div className="notice__icon"><i className={("fa-heart fa-solid")} onClick={setStateNotice}></i></div>
                </div>
            </div>;
};
