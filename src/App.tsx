
import './App.css'
import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepo'


function App() {


  const { data, isLoading } = useFetchRepositories('YAFcod3')
  console.log(data)
  const { favoriteReposIds } = useFavoriteReposStore()


  if (isLoading) return <div>...Loading</div>


  return (
    <article className='cards'>

      {data?.map(repository => (
        <Card key={repository.id} repository={repository} isFavorite={favoriteReposIds.includes(repository.id)}/>
        ))}


    </article>
  )
}

export default App
