 //backend
 const API_URL = 'http://localhost:8800'

  export default () => {
    return fetch(`${API_URL}/pulpit`, {
        method: 'GET',
    })
    .then(res => res.json())
  }