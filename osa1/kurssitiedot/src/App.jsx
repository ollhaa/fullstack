const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course = {course} />
      <Content part = {part1} />
      <Content part = {part2} />
      <Content part = {part3} />
      <Total exercises = {[part1.exercises, part2.exercises, part3.exercises]} />

    </div>
  )
}

const Header = (props) => {
  return (
    <div>
    <h1> {props.course} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part ={props.part}/>

    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> <b>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]} </b></p>
    </div>
  )
}

export default App