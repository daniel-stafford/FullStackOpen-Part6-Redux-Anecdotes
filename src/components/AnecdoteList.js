import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes

  const handleVote = anecdote => {
    console.log('vote', anecdote)
    props.store.dispatch(addVote(anecdote.id))
    props.store.dispatch(setNotification(`You voted for: ${anecdote.content}`))
    console.log('first dispatch')
    setTimeout(() => props.store.dispatch(removeNotification()), 5000)
  }

  return (
    <div>
      {anecdotes
        .filter(anecdote =>
          anecdote.content
            .toLowerCase()
            .includes(props.store.getState().filter.toLowerCase())
        )
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
