import React from 'react'
import style from './SearchBar.module.css';
import CloseIcon from '@material-ui/icons/Close';
import _ from 'lodash'
const SearchBar = (props) => {
    let textInput = null;
const handleChange =_.debounce((text) => {
     props.searchedData(text)
},500)


    return (
        <div className={style.searchWrap}>
         <input 
         ref={(input) => { textInput = input; }}
         className = {style.searchBar} 
         placeholder ="Search for a movie or a TV show "
         onChange = {(e)=>handleChange(e.target.value)}/>
         <div><CloseIcon 
         className = {style.cross}
         onClick = {() => textInput.value =''}/></div>
        </div>
    )
}

export default SearchBar
