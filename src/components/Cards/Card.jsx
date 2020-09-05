import React,{useState, useEffect} from 'react';
import styles from './Cards.module.css';
import DoneIcon from '@material-ui/icons/Done';
import {fetchMovieDetail} from '../../API'
import Modal from '../Modal/Modal'

const Cards = ({ movie }) => {
    const [movieDetail, setMovieDetail] = useState({});
    useEffect(()=> {
    },[movieDetail])


    return (
        <div className = {styles.cardWrapper} onClick = {async() =>setMovieDetail(await fetchMovieDetail(movie.Title))}>
            <img src = {movie.Poster} alt= {movie.Title}/>
    <div className={styles.title}>{movie.Title} {movie.Type}</div>
    <div className={styles.bottom}>
        <div className={styles.watched}><DoneIcon className={styles.done}/>watched</div>
        <div className = {styles.cross}>x</div>
        </div>
        {movieDetail.hasOwnProperty('Title') ? <Modal movieDetail={movieDetail}/> : ''}
        </div>
    )
}

export default Cards
