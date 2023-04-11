import "../styles/components/card.css";

const Card = ({ movieData }) => {
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
  return (
    <div className="card">
      <span className="favoris">🧡</span>
      <div className="img">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movieData.backdrop_path}
          alt={movieData.title}
        />
      </div>
      <div className="card-overflow">
        <h2>{movieData.title}</h2>
        <span>sorti le: {formaterDate(movieData.release_date)}</span>
        <span>{movieData.vote_average}/10 ⭐</span>
        <p>Origine: USA</p>
        <div className="genre">
          <span>Action</span>
          <span>Aventure</span>
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
