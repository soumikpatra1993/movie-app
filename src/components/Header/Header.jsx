import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AddIcon from '@material-ui/icons/Add';

const header = (props) => {

    const getData  =(input) => {
        props.searchedData(input)
    }
    return (
        <div className= {styles.container}>
            <h2><LocalMoviesIcon className={styles.Appicon}/>My Watchlist</h2> 
            <span>Search to add Movies or TV shows to your watchList</span>
            <div className={styles.searchContainer}>
                <div className={styles.iconWrap}>
                    <AddIcon className={styles.icon}/></div>
                <SearchBar searchedData = {getData}/>
            </div>
        </div>
    )
}

export default header
