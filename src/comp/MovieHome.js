import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function MovieHome() {
  const [loading, setLoading] = useState(true)
  const [movielist, setMovielist] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    .then((response)=>response.json())
    // .then((aaa)=>{console.log(aaa.data.movies)});
    .then((aaa)=>{setMovielist(aaa.data.movies)
    setLoading(false)});
  },[]) //한 번만 수행됨

  console.log('movielist', movielist);


  return(
    <div>
      <h3>영화리스트</h3>
      {
          loading ? <span>Loading...</span> :
          movielist.map((movie)=>(
            <div key={movie.id}>
              {/*<h5>{movie.title}</h5>*/}
              <Link to={movie.url}>{movie.title}</Link><br />
              <img src={movie.medium_cover_image} />
              <h6>{movie.rating}</h6>
              <h6>{movie.year}</h6>
              <p>{
              movie.summary.length > 200 ? `${movie.summary.slice(0, 200)}...` : movie.summary
              }</p>
              <p>{movie.genres.map((g) => (
                <p key={g}>{g}</p>
              ))}</p>
            </div>
          ))
        }
    </div>
  )
}