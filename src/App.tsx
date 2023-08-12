
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepo'


function App() {

  const [input, setInput] = useState<string>('')

  const { data: repos, isFetching, refetch } = useFetchRepositories(`${input}`)
  // console.log(repos)
  const { favoriteReposIds } = useFavoriteReposStore()





  const handleFetchRepo = async () => {
    await refetch()
  }




  console.log(repos?.length)


  return (

    <>
      <div className="form">
        <div className="boxInput">
          <input
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            type="text" placeholder="Escribe: YAFcod3 o tu user de github" />
        </div>
        <button disabled={isFetching} onClick={handleFetchRepo}>Aceptar</button>

        {repos && (
                <span>{repos?.length} Repositorios</span>

        )}
      </div>

      



      {isFetching && (
        <div>...Loading</div>
      )}
      {repos && (
        <article className='cards'>

          {repos?.map(repository => (
            <Card key={repository.id} repository={repository} isFavorite={favoriteReposIds.includes(repository.id)} />
          ))}


        </article>
      )}
    </>
  )
}

export default App
