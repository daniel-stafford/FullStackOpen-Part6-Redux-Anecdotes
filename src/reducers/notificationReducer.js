const initialNotification = 'This is the default message'

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.content
    default:
      return state
  }
}

export const notificationChange = content => {
  return {
    type: 'SET_NOTIFICATION',
    content
  }
}

export default notificationReducer
