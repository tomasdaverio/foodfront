import React , { useEffect } from 'react' ;
import { NavLink } from 'react-router-dom' ;
import style from './Nav.module.css' ;
import { useDispatch } from "react-redux" ;
import { getRecipeByName } from '../../Redux/actions.js' ;

function Nav (){

    const dispatch = useDispatch() ;

    useEffect(() => dispatch(getRecipeByName()),[]) ;

    return(
        <div className={style.navbar}>

            <span><NavLink to={'/app/recipe/about'} className={style.main}>About</NavLink></span> 
            <span><NavLink to={'/app/1'} className={style.main}>Home</NavLink></span>
            <span><NavLink to={'/app/recipe/create'} className={style.main}>Add Recipe</NavLink></span>
            
        </div>
    )
}

export default Nav ;