import React from 'react'

const Notification = props => {
  console.log(props.store.getState())
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return <div style={style}> {props.store.getState().notification}</div>
}

export default Notification
