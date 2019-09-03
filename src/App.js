import React from 'react'
import { addVote, addAnecdote } from './reducers/anecdoteReducer'

const App = props => {
  console.log('app props', props)
  const anecdotes = props.store.getState()

  const handleVote = id => {
    console.log('vote', id)
    props.store.dispatch(addVote(id))
  }

  const handleAnecdote = e => {
    e.preventDefault()
    const text = e.target.userAnecdote.value
    props.store.dispatch(addAnecdote(text))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={handleAnecdote}>
        <div>
          <input name='userAnecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
