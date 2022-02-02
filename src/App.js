import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
    await fetch(`https://yts.mx/api       <https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`>)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    };
    useEffect(() => {
    getMovies();
    }, []);
    
    return (
    <div className="App">
    {loading ? (
    <h1>Loading...</h1>
    ) : (
    <div>
    {movies.map((movie) => (
    <div key={movie.id}>{movie.titl}</div>
    ))}
    </div>
    )}
    </div>
    );
}

export default App;
