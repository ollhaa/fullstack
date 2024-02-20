import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = (good) => setGood(good)
  const addNeutral = (neutral) => setNeutral(neutral)
  const addBad = (bad) => setBad(bad)


  const name = 'give feedback'



  return (
    <div>
      <Header name = {name} />
      <Button handleClick={() => addGood(good+1)} text="good" />
      <Button handleClick={() => addNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => addBad(bad+1)} text="bad" />

      <Header name = 'statistics' />
      <Statistics stats = {['good', good, 'neutral', neutral, 'bad', bad]} />
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

const Statistics = (props) => {
  if (props.stats[1] == 0 && props.stats[3] == 0 && props.stats[5] == 0) {
    return "No feedback given"
  } else {
    const all = props.stats[1] + props.stats[3] + props.stats[5]
    const average = (props.stats[1]*1 + props.stats[3]*0 + props.stats[5]*(-1))/(props.stats[1] + props.stats[3] + props.stats[5])
    const positive = (props.stats[1]*1)/(props.stats[1] + props.stats[3] + props.stats[5])*100
  
    return (
      <div>
        <StatisticLine text="good" value ={props.stats[1]} />
        <StatisticLine text="neutral" value ={props.stats[3]} />
        <StatisticLine text="bad" value ={props.stats[5]} />

        <StatisticLine text="all" value = {all} />
        <StatisticLine text="average" value = {average} />
        <StatisticLine text="positive" value = {positive} /> % 


      </div>
    )
  }
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export default App
