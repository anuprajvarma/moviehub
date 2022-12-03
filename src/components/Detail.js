import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Table } from "./Table";

export const Detail = () => {
  const params = useParams();

  const [moviedetail, setmoviedetail] = useState({});

  useEffect(() => {
    const imdbId = params.imdbId;
    fetchmoviedetails(imdbId);
  }, []);

  const fetchmoviedetails = (id) => {
    const moviedetailsurl = `https://www.omdbapi.com/?i=${id}&apikey=e98286fa`;

    fetch(moviedetailsurl)
      .then((response) => response.json())
      .then((result) => {
        setmoviedetail(result);
      });
  };
  return (
    <div className="detailPage">
      <img
        alt="poster"
        src={moviedetail.Poster}
        style={{ margin: "30px 0px 0px 0px" }}
      ></img>
      <h1 style={{ fontSize: "50px" }}>{moviedetail.Title}</h1>
      <h6 style={{ fontSize: "15px" }}>{moviedetail.Plot}</h6>
      <table className="table">
        <Table
          Released={moviedetail.Released}
          Genre={moviedetail.Genre}
          Director={moviedetail.Director}
          Writer={moviedetail.Writer}
          Actors={moviedetail.Actors}
          Language={moviedetail.Language}
        />
      </table>
    </div>
  );
};
