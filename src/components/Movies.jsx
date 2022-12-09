import React, {useState, useEffect} from 'react'

import axios from "axios";

function Movies() {
    let [movies, setMovies] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=505f0bcf")
      .then(response => setMovies(response.data));
  }, []);
  return (
    <div>
       
    </div>
  )
}

export default Movies