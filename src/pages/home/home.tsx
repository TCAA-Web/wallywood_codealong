import type { MovieData } from '../../types/movieType'
import { Title } from '../../components/Title/Title'
import { Poster } from '../../components/Poster/Poster'
import curtainImage from '../../assets/images/curtain.jpg'
import style from './home.module.scss'
import { Grid } from '../../components/Grid/Grid'
import { useFetch } from '../../hooks/useFetch'

export function Home() {
  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    'http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image,price',
  )

  if (isLoading) {
    return <h1>Loading data......</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <img className={style.homePageImage} src={curtainImage} alt='curtain_image'></img>
      <Title text={'Sidste nyt...'} />
      <Grid gtc='1fr 1fr' gap={32}>
        {data &&
          data.map((item) => {
            return (
              <Poster
                genres={item.genres}
                title={item.name}
                imageUrl={item.image}
                description={item.description}
                id={item.id}
              />
            )
          })}
      </Grid>
    </>
  )
}
