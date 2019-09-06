import anecdotesService from '../services/anecdotes'

export const addVote = id => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export const addAnecdote = text => {
  return { type: 'ADD_ANECDOTE', data: { text } }
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
      let target = state.find(p => p.id === action.data.id)
      target = { ...target, votes: target.votes + 1 }
      return state
        .map(p => (p.id !== action.data.id ? p : target))
        .sort((a, b) => b.votes - a.votes)
    case 'ADD_ANECDOTE':
      return state.concat(asObject(action.data.text))
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer
