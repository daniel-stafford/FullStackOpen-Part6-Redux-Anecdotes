const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const addVote = id => {
  console.log('addvote function firing', id)
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export const addAnecdote = text => {
  return { type: 'ADD_ANECDOTE', data: { text } }
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('anecdote reducer is firing', state, action)
  switch (action.type) {
    case 'ADD_VOTE':
      let target = state.find(p => p.id === action.data.id)
      target = { ...target, votes: target.votes + 1 }
      return state
        .map(p => (p.id !== action.data.id ? p : target))
        .sort((a, b) => b.votes - a.votes)
    case 'ADD_ANECDOTE':
      return state.concat(asObject(action.data.text))
    default:
      return state
  }
}

export default anecdoteReducer
