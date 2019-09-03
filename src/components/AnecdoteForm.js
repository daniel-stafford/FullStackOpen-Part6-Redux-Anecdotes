import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = props => {
  const handleAnecdote = e => {
    e.preventDefault()
    const text = e.target.userAnecdote.value
    props.store.dispatch(addAnecdote(text))
  }
  return (
    <div>
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

export default AnecdoteForm
