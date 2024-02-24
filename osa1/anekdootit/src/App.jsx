import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
   
  const [selected, setSelected] = useState(0)
  const [points, setVoted] = useState(Array(8).fill(0))

  const showAnecdote = () => {
    setSelected(getRandomInt(8))

  }
  const addVote = () => {
    const copy = [...points]
    copy[selected] +=1
    setVoted(copy)

  }

  const name = "Vote or...vote"
  const result = "Anecdote with most votes"

  return (
    <div>
      <Header name = {name} />
      {anecdotes[selected]} <br></br>
      <p>
      <Button handleClick={() => showAnecdote()} text="next anecdote" />
      <Button handleClick={() => addVote()} text="vote" />
      <Header name = {result} />
      </p>
      <Result anecdotes = {anecdotes} points = {points} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => {
  return (
    <div>
    <h1> {props.name} </h1>
    </div>
  )
}

const Result = (props) => {
  const max = Math.max(...props.points)
  const index = props.points.indexOf(max)
  const ans = props.anecdotes[index]
  return (
    <>
      <p>
        {ans} <br></br>
        <b>has {max} votes </b>
      </p>
    </>
  )
}

export default App
