
function ProjectSideBar({onClick, projects, onSelect, selectedProjectId}){
    console.log(projects)
    return <div className="navgation">
    <h1>YOUR PROJECTS </h1>
    <button className="main-btn" onClick={onClick} >+ Add projects</button>
    <ul>
        {projects.map( project => {
            return <li key={project.id}>
                <button className={selectedProjectId === project.id ? 'active': null}  onClick={ () => onSelect(project.id)}> 
                    { project.title }
                </button>
            </li>
        })}
    </ul>
    
  </div>
}

export default ProjectSideBar