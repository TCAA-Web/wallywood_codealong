import { Poster } from '../../components/Poster/Poster'
import { Grid } from '../../components/Grid/Grid'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import type { MovieData } from '../../types/movieType'

export function Posters() {
  const [selectedGenre, setSelectedGenre] = useState('komedie')

  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    `http://localhost:3000/posters/list_by_genre/${selectedGenre}`,
  )

  if (isLoading) {
    return <h1>Loading data......</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>Posters page</h1>
      <ul>
        <li onClick={() => setSelectedGenre('drama')}>Drama</li>
        <li onClick={() => setSelectedGenre('gysere')}>Gyser</li>
      </ul>
      <Grid gtc={3} gap={32}>
        {data?.map((item) => {
          return <Poster imageUrl={item.image} id={item.id} genres={item.genres} title={item.name} />
        })}
      </Grid>
    </>
  )
}
