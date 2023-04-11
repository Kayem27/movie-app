import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Filter from "../components/Filter";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR")
    .then((res) => setData(res.data.results))
  }, [])


  return (
    <div>
      <Navigation />
      <Logo />
      <div className="search">
        <input type="search" />
      </div>
      {/* <Filter /> */}
      <div className="movies">
        {
          data.map((movie) => (<Card key={data.id} movieData={movie} />))
        }
      </div>
    </div>
  );
};

export default Home;
