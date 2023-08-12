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
      <h4>{repository.name}</h4>
     {repository.language &&  <p>Lenguajes: {repository.language}</p>}
      {repository.description && <span>Description: {repository.description}</span>}

      <button onClick={toggleFavorite}>{isFavorite ? "Dislike" : "Like"}</button>
    </div>


  )
} export default Card