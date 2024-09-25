

function Task({onDelete, tasks}){ 
        return <>
        {tasks.length == 0? <p> this project doent seen to have any task</p> : 
            <ul>
                {tasks.map( (task => {

                return <li key={task.id}>
                    <span>{task.text}</span>
                    <button onClick={ () => onDelete(task.id) }>clear</button>
                </li>
                }))}
            </ul>
        }



    </>
}

export default Task