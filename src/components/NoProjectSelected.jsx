import img from '.././assets/no-projects.png'

function NoProject({onClick}){
    return <div className="work-space">
    <img src={img} alt="clip-bord-img" />
    <h2> no project selected </h2>      
    <p> select a project or get started with a new one </p>
    <button onClick={onClick}>Create new project</button>
</div>

}

export default NoProject
