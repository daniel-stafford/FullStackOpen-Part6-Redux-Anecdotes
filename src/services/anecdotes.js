import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async anecdoteObject => {
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const update = async (id, data) => {
  const response = await axios.put(`baseUrl/${id}`, data)
  console.log('update response', response.data)
  return response.data
}

export default {
  getAll,
  createNew,
  update
}
