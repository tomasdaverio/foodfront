import React from 'react' ;
import { NavLink } from 'react-router-dom' ;
import style from './Nav.module.css' ;

function Nav (){
    return(
        <div className={style.navbar}>

            <span><NavLink to={'/app/recipe/about'} className={style.main}>About</NavLink></span> 
            <span><NavLink to={'/app'} className={style.main}>Home</NavLink></span>
            <span><NavLink to={'/app/recipe/create'} className={style.main}>Create your Recipe!</NavLink></span>
            
        </div>
    )
}

export default Nav ;