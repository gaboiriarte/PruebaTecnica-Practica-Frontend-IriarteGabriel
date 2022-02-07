import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { allNotices, favsNotices } from '../actions/button';

export const Buttons = () => {
  const location = useLocation();
  const {pathname: pathActual} = location;

  const dispatch = useDispatch();
  const { buttonFavsSelected } = useSelector( state => state.button );    

  const handleClickAll = () =>{
    dispatch(allNotices());
  }

  const handleClickFavs = () =>{
    dispatch(favsNotices());
  }

  return <div className='buttons'>
            <NavLink to="/allNotices"><button className={("button ") +((pathActual === '/allNotices' ) ? "button-selected" : "")} onClick={handleClickAll}><p className="button__text">All</p></button></NavLink>
            <NavLink to="/favsNotices"><button className={("button ") +((pathActual === '/favsNotices' ) ? "button-selected" : "")}  onClick={handleClickFavs}><p className="button__text">My faves</p></button></NavLink>
  </div>;
};
