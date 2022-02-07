/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingNews } from '../actions/notice';

import { selectPage, selectTechnology } from '../actions/select';

export const SelectBox = () => {

    const dispatch = useDispatch();
    const lastTech = (localStorage.getItem('lastTech') ) ? localStorage.getItem('lastTech') : '';

    // const {pageSelected} = useSelector(state => state.select);

    
    
    const [tech, setTech] = useState(lastTech);
    const [disabled, setDisabled] = useState(false);
    const [openSelectBox, setOpenSelectBox] = useState(false);
    
    useEffect(() => {
        dispatch(selectTechnology(lastTech));

        if(tech !== ''){
            dispatch(startLoadingNews(tech,1));
            dispatch(selectPage(1));
        }
        
    }, []);
   
    const handleClick = (e) =>{
        setDisabled(true);
        const newTech = e.target.childNodes[0].childNodes[0].alt;
        setTech(newTech);
        dispatch(selectTechnology(newTech));
        localStorage.setItem('lastTech', newTech);
        dispatch(startLoadingNews(newTech,1));
        dispatch(selectTechnology(newTech));
        
        setOpenSelectBox(!openSelectBox);
        dispatch(selectPage(1));


        setDisabled(false);
    }
    

    return <div className='contenedor'>
        <form action="">
            <div className="selectbox" disabled ={disabled} onClick={()=> setOpenSelectBox(!openSelectBox)}>
                <div className="select active" id="select" >

                    {
                        (!tech) ?
                        (<div className="contenido-select">
                            <h1 className="opcion__tecnologia">Select your news</h1>
                        </div>) :
                        (<div className="contenido-select" >
                            <figure className="picture"><img className="img" alt={tech} src={`/imgs/${tech.toLowerCase()}.png`}></img></figure>
                            <p className="opcion__tecnologia">{tech}</p>
                        </div> )
                    }
                    {/* <div className="contenido-select">
                        <h1 className="opcion__tecnologia">Select your news</h1>
                    </div>
                    <i className="fas fa-angle-down"></i> */}
                    {/* <div className="contenido-opcion" onClick={handleClick}>
                        <figure className="picture"><img className="img" alt="Angular" src="/imgs/angular.svg"></img></figure>
                        <p className="opcion__tecnologia">Angular</p>
                    </div>  */}
                    <i className={"fas fa-angle-down " + (openSelectBox ? "rotate" : "")}></i>
                    
                </div>
            </div>

            <div className={("opciones ") + (openSelectBox ? "active" : "")} id="opciones">
                <a href="#" className="opcion" >
                    <div className="contenido-opcion" onClick={handleClick}>
                        <figure className="picture"><img className="img" alt="Angular" src="/imgs/angular.png"></img></figure>
                        <p className="opcion__tecnologia">Angular</p>
                    </div>
                </a>
                <a href="#" className="opcion">
                    <div className="contenido-opcion" onClick={handleClick}>
                        <figure className="picture"><img className="img" alt="React" src="/imgs/react.png"></img></figure>
                        <p className="opcion__tecnologia">React</p>

                    </div>
                </a>

                <a href="#" className="opcion">
                    <div className="contenido-opcion" onClick={handleClick}>

                        <figure className="picture"><img className="img" alt="Vue" src="/imgs/vue.png"></img></figure>
                        <p className="opcion__tecnologia">Vue</p>

                    </div>
                </a>

            </div>


            <input type="hidden" name="tecnologia" id="inputSelect" value=""></input>

        </form>
    </div>;
};
