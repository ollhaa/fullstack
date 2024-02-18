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
      <Content stats = {['good', good, 'neutral', neutral, 'bad', bad]} />
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
      <p>
        {props.stats[0]} {props.stats[1]} <br></br>
        {props.stats[2]} {props.stats[3]} <br></br>
        {props.stats[4]} {props.stats[5]} <br></br>
        all {props.stats[1] + props.stats[3] + props.stats[5]} <br></br>
        avarage {(props.stats[1]*1 + props.stats[3]*0 + props.stats[5]*(-1))/(props.stats[1] + props.stats[3] + props.stats[5])} <br></br>
        positive {(props.stats[1]*1)/(props.stats[1] + props.stats[3] + props.stats[5])*100} %

      </p>


    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export default App
