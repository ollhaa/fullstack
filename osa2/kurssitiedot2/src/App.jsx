const TotalExr = (props) => {
  const exercises = props.parts
  const initial =0
  const total = exercises.reduce( (sum, part) => sum + part.exercises, initial)

  return (
    <div>
      <b>
        total of {total} exercises
      </b>
    </div>

  )
}


const Content = (props) => {
  const parts = props.parts
  return (
    <div>

     {parts.map(part => <p key = {part.id}> {part.name} {part.exercises}</p>)} 

    </div>
  )
}

const MainHeader = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      
      <Header name = {props.course.name}  />
      <Content parts = {props.course.parts} /> 
      <TotalExr parts = {props.course.parts} />
    </div>
  )
}

const App = () => {
  const title = "Web development curriculum"
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <MainHeader header = {title}  />
      {courses.map((course) => (
      <Course key = {course.id} course = {course} />)) }
    </div>
  )
}

export default App