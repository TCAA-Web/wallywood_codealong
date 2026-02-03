import { NavLink } from 'react-router'
import type { Genre } from '../../types/movieType'
import style from './Poster.module.scss'
import parse from 'html-react-parser'

interface PosterProps {
  id: number
  imageUrl: string
  title: string
  description?: string
  genres: Array<Genre>
  price?: number
  slug?: string
}

export function Poster({ id, imageUrl, title, description, genres, price, slug }: PosterProps) {
  return (
    <div key={id} className={style.posterStyle}>
      <img src={imageUrl}></img>
      <div>
        <h4>{title}</h4>
        {description && <div>{parse(description)}</div>}
        <p>Genre:</p>
        {genres &&
          genres.map((genre: Genre) => {
            return <span key={genre.id}>{genre.title}</span>
          })}
        {price && <p>Price: {price}</p>}
        {/* Her sætter vi variablen "slug" på details routen, så vi kan trække den ud, inde i details siden */}
        {slug && <NavLink to={`/details/${slug}`}>Læs mere</NavLink>}
      </div>
    </div>
  )
}
