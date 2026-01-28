export interface MovieData {
  id: number
  name: string
  description: string
  image: string
  genres: Genre[]
}

export interface Genre {
  id: number
  title: string
  slug: string
  poster_genre_rel: PosterGenreRel
}

export interface PosterGenreRel {
  id: number
  poster_id: number
  genre_id: number
}
