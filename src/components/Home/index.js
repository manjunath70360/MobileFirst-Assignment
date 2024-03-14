import {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'

import './index.css'

const Home = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch(
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
    )
      .then(response => response.json())
      .then(data =>
        setJokes(data.jokes.map((joke, index) => ({...joke, id: index}))),
      )
      .catch(error => console.error('Error fetching jokes:', error))
  }, [])

  return (
    <div>
      <h2 className="heading">Jokes</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map(joke => (
            <tr key={joke.id}>
              <td>{joke.id + 1}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Home
