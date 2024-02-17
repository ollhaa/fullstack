import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const name = 'give feedback'
  const stats = [
    {rate: 'good', amount: 6},
    {rate: 'neutral', amount: 2},
    {rate: 'bad', amount: 1}
  ]

  return (
    <div>
      <Header name = {name} />
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <Header name = 'statistics' />
      <Content stats = {stats} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
    <h1> {props.name} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> {props.stats[0].rate} {props.stats[0].amount} <br></br>
          {props.stats[1].rate} {props.stats[1].amount} <br></br>
          {props.stats[2].rate} {props.stats[2].amount}

      </p>
    </div>
  )
}

export default App
