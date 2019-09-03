import React from 'react'

const App = props => {
  console.log('app props', props)
  const anecdotes = props.store.getState()

  const vote = id => {
    console.log('vote', id)
    props.store.dispatch({ type: 'VOTE', id })
  }

  const addAnecdote = e => {
    e.preventDefault()
    const text = e.target.userAnecdote.value
    props.store.dispatch({ type: 'ADD', text })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='userAnecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
