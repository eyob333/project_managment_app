import { useState } from "react"
import Task from "./Task"

function SelectedPage({project, onDelete, onAddTask, onDeleteTask, task}){
    const [enteredTask,  setEnteredTask] = useState('')

    function handleChange(e){

        setEnteredTask( e.target.value )

    }

    function handleClick(){
        onAddTask(enteredTask)
        setEnteredTask('')
    }

    const formattedDate =new Date(project.time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return <div id="selection-page">
        <div className="selection-top">
            <h1> {project.title} </h1>
            <button onClick={onDelete}>delete</button>
        </div>
        <p className="time"> {formattedDate} </p>
        <p> {project.descripion} </p>
        <hr />
        <h2>Tasks</h2>
        <input onChange={handleChange} type="text" value={enteredTask}/>
        <button onClick={handleClick} > add task</button>
        <div className="selection-task">
           <Task tasks={task}  onDelete={onDeleteTask}  /> 
        </div>
   </div>
}

export default SelectedPage