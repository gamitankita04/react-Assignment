
import Task1 from './Assigment/Task1'
import Task10 from './Assigment/Task10'
import Task11 from './Assigment/Task11'
import Task12 from './Assigment/Task12'
import Task13 from './Assigment/Task13'
import Task2 from './Assigment/Task2'
import Task3 from './Assigment/Task3'
import UserCard from './Assigment/Task4'
import Counter from './Assigment/Task5'
import Task6 from './Assigment/Task6'
import Task7 from './Assigment/Task7'
import Task8 from './Assigment/Task8'
import Task9 from './Assigment/Task9'

function App() {
  
  return (
    <>
      
      <Task1/>
      <Task2/>
      <Task3/>
      {/*task4 */}
      <UserCard name="ankita" age={20} location="vyara" />
      {/*task5 */}
      <Counter/>
      <Task6/>
      <Task7/>
      <Task8 isLogging={false}/>
      <Task9/>
      <Task10/>
      <Task11/>
      <Task12/>
      <Task13/>

    </>
  )
}

export default App
