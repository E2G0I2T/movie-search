import { useEffect, useState } from "react"
import Movie from "./Movie"

export default function MovieHome2() {
  const [loading, setLoading] = useState(true)
  const [movielist, setMovielist] = useState([])
  const [genre, setGenre] = useState(""); //모든 장르
  const [rating, setRating] = useState("0");
  const [limit, setLimit] = useState("10");
  const [changeMovie, setChangeMovie] = useState(0);
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${word}&minimum_rating=${rating}&genre=${genre}&limit=${limit}`)
    .then((response)=>response.json())
    .then((aaa)=>{setMovielist(aaa.data.movies)
    setLoading(false)});
  },[changeMovie]); //한 번만 수행됨

  console.log('movielist', movielist);

  const selGenre = (e) => {
    console.log('장르=>', e.target.value);
    setGenre(e.target.value);
  }

  const selLimit = (e) => {
    console.log('Limit=>', e.target.value);
    setLimit(e.target.value);
  }

  const selRating = (e) => {
    console.log('평점=>', e.target.value);
    setRating(e.target.value);
  }

  const getMovie = (e) => {
    setLoading(true);
    setChangeMovie(changeMovie + 1);
  }

  const aaa = (e) => {
    console.log(e.target.value);
    setWord(e.target.value);
  }


  return(
    <div>
      Genre:
      <select onChange={selGenre}>
        <option value="">모든장르</option>
        <option value="Action">액션</option>
        <option value="Comedy">코메디</option>
        <option value="Drama">드라마</option>
      </select>
      &nbsp;&nbsp;&nbsp;
      limit:
      <select onChange={selLimit}>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="30">30</option>
        <option value="20">20</option>
        <option value="10">10</option>
      </select>
      &nbsp;&nbsp;&nbsp;
      rating:
      <select onChange={selRating}>
        <option value="0">모든작품</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
      </select>
      &nbsp;&nbsp;&nbsp;

      검색 키워드 : <input type="text" onChange={aaa}/>
      &nbsp;&nbsp;&nbsp;

      <button onClick={getMovie}>영화 검색</button>



      <h3>영화리스트2</h3>
        {
          loading ? <span>Loading...</span> :
          <div className="movielist">{
          movielist.map((movie)=>(
              <Movie movie={movie} key={movie.id}/>
          ))
          }
          </div>
        }
    </div>
  )
}