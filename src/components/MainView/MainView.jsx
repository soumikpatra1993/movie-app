import React from 'react'
import Cards from '../Cards/Card';
import style from './MainView.module.css'

function MainView({movies}) {
const renderCards = () => {
    if ( Array.isArray(movies) && movies.length) {
        return movies.map((movie,i) => <Cards key = {i} movie = {movie}/>)
    } else {
       return movies
    }
}
const headertext = () => {
    return (Array.isArray(movies) && movies.length) ?<h4>Up Next</h4> : 'Search for movies' 
}
    return  (
        <div>
           {headertext()}
            <div className = {style.cardContainer}>
                {renderCards()}
            </div>
        </div>
    )
}

export default MainView
