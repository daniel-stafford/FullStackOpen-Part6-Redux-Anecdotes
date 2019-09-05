const filterReducer = (state = '', action) => {
  console.log('FILTER REDUUCER ACTION: ', action)

  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const setFilter = filter => {
  console.log('setfilter fired', filter)
  return {
    type: 'SET_FILTER',
    filter
  }
}

export default filterReducer
