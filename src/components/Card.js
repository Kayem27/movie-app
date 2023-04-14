import { useEffect, useState } from "react";
import "../styles/components/card.css";
import axios from "axios";

const Card = ({ movieData }) => {
  const genreId = movieData.genre_ids;
  const [genreArray, setGenreArray] = useState([]);
  let imgURL = "";

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR"
    ).then((res) => setGenreArray(res.data.genres));
  }, []);

  function getMovieGenre(genreId) {
    const matchingGenre = genreArray.find((genre) => genre.id === genreId);
    return matchingGenre ? matchingGenre.name : null;
  }
  module.exports=getMovieGenre;
  
  function formaterDate(date) {
    let dateObj = new Date(date);
    let jour = dateObj.getDate();
    let mois = dateObj.getMonth() + 1;
    let annee = dateObj.getFullYear();

    if (jour < 10) {
      jour = "0" + jour;
    }
    if (mois < 10) {
      mois = "0" + mois;
    }

    return jour + "/" + mois + "/" + annee;
  }

  module.exports=formaterDate;

  if (movieData.backdrop_path) {
    imgURL = "https://image.tmdb.org/t/p/original/"+movieData.backdrop_path;
  } else {
    imgURL ="https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072_960_720.jpg";
  }
  return (
    <div className="card">
      <span className="favoris">🧡</span>
      <div className="img">
        <img
          src={imgURL}
          alt={movieData.title}
        />
      </div>
      <div className="card-overflow">
        <h2>{movieData.title}</h2>
        <span>sorti le: {formaterDate(movieData.release_date)}</span>
        <span>{movieData.vote_average}/10 ⭐</span>
        <div className="genre">
          {genreId.map((genre) => (
            <span>{getMovieGenre(genre)}</span>
          ))}
        </div>
        <p>
          <strong>Synopsis</strong> <br />
          <br />
          {movieData.overview}
        </p>
      </div>
    </div>
  );
};

export default Card;
