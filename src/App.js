import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainView from './components/MainView/MainView';
import {fetchMovies} from './API'

const App = () => {
  const [searchedData, setSearchedData] = useState([])
  const searchResult = async (input) =>  setSearchedData(await fetchMovies(input))

  return (
    <div className="App">
<Header searchedData = {searchResult}/>
<MainView movies = {searchedData} />
    </div>
  );
}

export default App;
