
// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepo'


function App() {


  const { data, isLoading } = useFetchRepositories('YAFcod3')
  console.log(data)
  const { favoriteReposIds } = useFavoriteReposStore()


  if (isLoading) return <div>...Loading</div>


  // const {input,setInput}=useState<string>('')


  return (

    <>
      <div className="form">
        <div className="boxInput">
          <input
            //  onChange={(e)=>setInput(e.target.value)} 
            type="text" placeholder="Escribe: YAFcod3 o tu user de github" />
        </div>
        <button >Send</button>
      </div>
      <article className='cards'>

        {data?.map(repository => (
          <Card key={repository.id} repository={repository} isFavorite={favoriteReposIds.includes(repository.id)} />
        ))}


      </article>
    </>
  )
}

export default App
