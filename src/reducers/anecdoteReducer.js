import anecdotesService from '../services/anecdotes'

export const addVote = anecdote => {
  console.log('paramter anecdote', anecdote)
  const updateObject = { ...anecdote, votes: anecdote.votes + 1 }
  console.log('const updateObject', updateObject)
  return async dispatch => {
    const processedAnecdote = await anecdotesService.update(
      anecdote.id,
      updateObject
    )
    console.log('processedAnecdote', processedAnecdote)
    dispatch({
      type: 'ADD_VOTE',
      data: processedAnecdote
    })
  }
}

export const addAnecdote = content => {
  const anecdoteObject = asObject(content)
  return async dispatch => {
    const processedAnecdote = await anecdotesService.createNew(anecdoteObject)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: processedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      console.log('action data', action.data)
      let target = state.find(p => p.id === action.data.id)
      target = { ...target, votes: target.votes + 1 }
      return state
        .map(p => (p.id !== action.data.id ? p : target))
        .sort((a, b) => b.votes - a.votes)
    case 'ADD_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer
