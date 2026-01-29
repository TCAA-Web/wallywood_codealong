import type { Genre } from '../../types/movieType'
import style from './Poster.module.scss'
import parse from 'html-react-parser'

interface PosterProps {
  id: number
  imageUrl: string
  title: string
  description?: string
  genres: Array<Genre>
}

export function Poster({ id, imageUrl, title, description, genres }: PosterProps) {
  return (
    <div key={id} className={style.posterStyle}>
      <img src={imageUrl}></img>
      <div>
        <h4>{title}</h4>
        {description && <div>{parse(description)}</div>}
        <p>Genre:</p>
        {genres &&
          genres.map((genre: Genre) => {
            return <span>{genre.title}</span>
          })}
        <button>Læs mere</button>
      </div>
    </div>
  )
}
