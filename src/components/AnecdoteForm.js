import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = props => {
  const handleAnecdote = async e => {
    e.preventDefault()
    const content = e.target.userAnecdote.value
    if (content === '') return null
    e.target.userAnecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.addAnecdote(newAnecdote.content)
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

const mapDispatchToProps = {
  addAnecdote
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
