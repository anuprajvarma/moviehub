import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [searchtxt, funsearch] = useState(""); //Text on search bar
  const [movielist, showmovies] = useState([]); //Movie list to be diplayed
  const [nomovielist, noshowmovies] = useState(false); //if no movie
  const navigate = useNavigate();

  const detailBtn = (movie) => {
    navigate(`/movie/detail/${movie.imdbID}`);
  };

  useEffect(() => {
    let term = localStorage.getItem("searchItem");
    if (term) {
      fetchmovies(term);
    }
  }, []);

  const setsearch = (e) => {
    funsearch(e.target.value); // set string search
  };
  const fetchmovies = (searcht) => {
    const searchurl = `https://www.omdbapi.com/?s=${searcht}&page=2&apikey=e98286fa`;

    localStorage.setItem("searchItem", searcht);

    fetch(searchurl)
      .then((response) => response.json())
      .then((result) => {
        if (result.Error) {
          showmovies([]);
          noshowmovies(true);
        } else {
          showmovies(result.Search);
          noshowmovies(false);
        }
      });

    // console.log(searcht);
  };

  const movieitems = movielist.map((movie) => {
    return (
      <div
        key={`${movie.imdbID}`}
        className="moviesCard"
        onClick={() => detailBtn(movie)}
      >
        <div className="ImageDiv">
          <p className="movieTitle">{movie.Title}</p>
          <img alt="poster" className="ImgCard" src={movie.Poster}></img>
        </div>
      </div>
    );
  });

  function clearresult() {
    funsearch("");
    showmovies([]);
    localStorage.removeItem("searchItem");
  }
  return (
    <div>
      <section className="searchDiv">
        <div className="">
          <div className="">
            <h1 style={{ fontSize: "40px", color: "#6D67E4" }}>
              Search Any Movie
            </h1>
            <p style={{ fontSize: "15px" }}>Your Place To Chill!</p>
            <p>
              <div>
                <input
                  type="text"
                  onChange={setsearch}
                  id="form1"
                  className="searchBar"
                  placeholder="Enter Movie Name    ex. Batman"
                  autoComplete="off"
                />
              </div>
            </p>
            <p>
              <button className="Btn" onClick={() => fetchmovies(searchtxt)}>
                Search
              </button>
              <button className="Btn" onClick={clearresult}>
                Clear Results
              </button>
            </p>
          </div>
        </div>
      </section>
      {nomovielist ? <h6>No Movie Found</h6> : <h6> </h6>}
      <section>
        <div className="moviesDiv">{movieitems}</div>
      </section>
    </div>
  );
};
