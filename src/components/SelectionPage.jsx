

function SelectionPage({Title, time, description, obj}){
    
    return <section id="selection-page">
        <div className="selection-top">
            <h1> {Title} </h1>
            <button>delete</button>
        </div>
        <p className="time"> {time} </p>
        <p> {description} </p>
        <hr />
        <h2>Tasks</h2>
        <input type="text" />
        <button> add task</button>
        <div className="selection-task">
           <p>{obj}</p> 
        </div>

   </section>
}

export default SelectionPage