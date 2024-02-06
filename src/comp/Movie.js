import { Link } from "react-router-dom"


export default function Movie(props) {
  const {id, url, medium_cover_image, rating, summary, genres, year, title} = props.movie;

  return(
    <div key={id} className="movie">
    {/*<h5>{movie.title}</h5>*/}
    <Link to={url}>{title}</Link><br />
    <img style={{width:'150px', height:'200px'}} src={medium_cover_image} />
    <br />
    <span>{rating}</span> /
    <span>{year}</span>
    <p style={{fontSize:'9px'}}>{
    summary.length > 200 ? `${summary.slice(0, 200)}...` : summary
    }</p>
    <div>{genres.map((g) => (
      <p key={g}>{g}</p>
    ))}</div>
  </div>
  )
}