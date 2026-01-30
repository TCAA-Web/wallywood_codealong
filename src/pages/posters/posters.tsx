import { Poster } from '../../components/Poster/Poster'
import { Grid } from '../../components/Grid/Grid'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import type { MovieData } from '../../types/movieType'
import { GenreSelect } from '../../components/GenreSelect/GenreSelect'

export function Posters() {
  const [selectedGenre, setSelectedGenre] = useState<string>('komedie')

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
      <Grid gap={32} gtc={'1fr 4fr'}>
        <GenreSelect setSelectedGenre={setSelectedGenre} />

        <Grid gtc={'1fr 1fr 1fr'} gap={32}>
          {data?.map((item) => {
            return (
              <Poster
                key={item.id}
                price={item.price}
                imageUrl={item.image}
                id={item.id}
                genres={item.genres}
                title={item.name}
              />
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}
