import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification
} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = props => {
  const handleVote = anecdote => {
    props.addVote(anecdote)
    props.setNotification(`You voted for: ${anecdote.content}`)
    setTimeout(() => props.removeNotification(), 5000)
  }

  return (
    <div>
      {props.anecdotesToShow.map(anecdote => (
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

const anecdotesToShow = (anecdotes, filter) => {
  console.log('ancedotes for filter', anecdotes)
  return anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )
}

const mapStateToProps = state => {
  return {
    anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  addVote,
  setNotification,
  removeNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
