import { type SetStateAction } from 'react'
import { useFetch } from '../../hooks/useFetch'
import type { Genre } from '../../types/movieType'
import style from './GenreSelect.module.scss'

interface GenreSelectProps {
  setSelectedGenre: React.Dispatch<SetStateAction<string>>
}

export function GenreSelect({ setSelectedGenre }: GenreSelectProps) {
  const { data, isLoading, error } = useFetch<Array<Genre>>('http://localhost:3000/genre')

  console.log(data)

  if (isLoading) {
    return <p>Loading genres...</p>
  }

  if (error) {
    return <b>Error: {error}</b>
  }

  return (
    <aside>
      <ul className={style.genreStyle}>
        {data?.map((item) => {
          return (
            <li key={item.id} onClick={() => setSelectedGenre(item.slug)}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
