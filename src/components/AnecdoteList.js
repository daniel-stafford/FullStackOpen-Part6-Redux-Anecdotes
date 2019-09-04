import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes

  const handleVote = id => {
    console.log('vote', id)
    props.store.dispatch(addVote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
