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

const Course = (props) => {
    return (
      <div>
        
        <Header name = {props.course.name}  />
        <Content parts = {props.course.parts} /> 
        <TotalExr parts = {props.course.parts} />
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

export default Course