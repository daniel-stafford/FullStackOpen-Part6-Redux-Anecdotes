import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from './services/anecdotes'

const App = props => {
  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => props.initializeAnecdotes(anecdotes))
  })

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

const mapDispatchToProps = {
  initializeAnecdotes
}

export default connect(
  null,
  mapDispatchToProps
)(App)
