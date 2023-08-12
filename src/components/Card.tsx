import { Repository } from "../hooks/types"
import { useFavoriteReposStore } from "../store/favoriteRepo"

type CardProps = {
  repository: Repository,
  isFavorite: boolean
}

function Card({ repository, isFavorite }: CardProps) {

  const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo)

  const toggleFavorite = () => {

    if (isFavorite) {
      removeFavoriteRepo(repository.id)
      return
    }
    addFavoriteRepo(repository.id)
  }


  return (

    <div className="card" >
      <h5>{repository.name}</h5>
     {repository.language &&  <h6>Lenguajes: {repository.language}</h6>}
      {repository.description && <span>Description: {repository.description}</span>}

      <button onClick={toggleFavorite}>{isFavorite ? "Dislike" : "Like"}</button>
      <a href={repository.html_url} target="_blank">Visitar</a>
    </div>


  )
} export default Card