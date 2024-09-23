import { useState } from 'react'
import img from './assets/no-projects.png'
import Form from './components/Form'
import SelectionPage from './components/SelectionPage'


function App() {

  const [projectSelected, setProjectSelected]  = useState(false)

function  handleClick(){
    setProjectSelected( prevState => {
      let state = prevState
      return !state
    })
  }

  return <>
  <section className='container'>
    <div className="navgation">
      <h1>YOUR PROJECTS </h1>
      <button onClick={handleClick} >+ Add projects</button>
    </div>
    {projectSelected ? <Form />  : 
    <div className="work-space">
      <img src={img} alt="" />
      <h2> no project selected </h2>      
      <p> select a project or get started with a new one </p>
      <button onClick={handleClick}>Create new project</button>
    </div>
    }
    {/* <Form /> */}
      {/* <SelectionPage Title='some thing' time={'tis is the time'} description='lets do some yo ga ' obj='some other thingssthdshsdh' /> */}
    </section>
  </>
}
export default App
