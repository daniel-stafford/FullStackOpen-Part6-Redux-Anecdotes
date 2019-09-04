import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const Filter = props => {
  const handleChange = e => {
    // input-field value is in variable event.target.value
    console.log('fitler', e.target.value)
    props.store.dispatch(setFilter(e.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter: <input onChange={handleChange} />
    </div>
  )
}

export default Filter
