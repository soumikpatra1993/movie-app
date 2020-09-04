import axios from 'axios';


export const fetchMovies  = async (search = 'man') => {
    const tempurl = `http://www.omdbapi.com/?s=${search}&apikey=3d05d49e`
try {
    const {data} = await axios.get(tempurl);
return data.Search;
} catch(error) {
    console.log('error', error);
}
}

export const fetchMovieDetail = async (title) =>{
    const tempurl = `http://www.omdbapi.com/?t=${title}&apikey=3d05d49e`;
    try {
        const {data} = await axios.get(tempurl);
        debugger
    return data;
    } catch(error) {
        console.log('error', error);
    }
    }
