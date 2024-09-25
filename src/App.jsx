import { useState, useRef } from 'react'
import ProjectSideBar from './components/ProjectSideBar'
import NewProject from './components/NewProject'
import NoProject from './components/NoProjectSelected'
import SelectitedPage from './components/SelectedPage'

function App() {

	const [projectState, setProjectState]  = useState({
		selectedProjectId: undefined,
		projects: [],
		task: []
	});

	function handleStartProject(){
		setProjectState( prevState => {
			return {
				...prevState,
				selectedProjectId: null
			}
		})
	};

	function handleAddProject(projectData){
		setProjectState( prevState => {
			const newProject = {
				...projectData,
				id: Math.random() * 10
			}
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject]
			}
		})
	};

	function handleCancelProject(){
		setProjectState( prevState => {
			return {
				...prevState,
				selectedProjectId: undefined
			}
		})
	}

	function handleAddSelectedProject(id){
		setProjectState( prevState => {
			return {
				...prevState,
				selectedProjectId: id,
			}
		 })

	}

	function handleDeleteProject(id){
		setProjectState( prevState => {
			return{
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter( project => project.id !== projectState.selectedProjectId)
			}
		})
	}

	function handleAddTask(text){
		setProjectState( prevState => {
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: Math.random() * 10
			}
			return {
				...prevState,
				task: [...prevState.task, newTask]
			}
		})
	}

	function handleDeleteTask(id){
		setProjectState( prevState => {
			return{
				...prevState,
				task: prevState.task.filter( task => task.id !== id)
			}
		})
	}

	function content(){
		if (projectState.selectedProjectId === null){
			return <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
		} else if (projectState.selectedProjectId === undefined){
			return <NoProject onClick={handleStartProject} />
		} else if(projectState.selectedProjectId !== null || projectState.selectedProjectId !== undefined ){
			const selectedProject = projectState.projects.find( project => project.id == projectState.selectedProjectId )
			return <SelectitedPage 
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			task={projectState.task}

			/>
		}
	};

  return <>
  <div className='container'>
		<main>
			<ProjectSideBar 
				onClick={handleStartProject}
				projects={projectState.projects}
				onSelect={handleAddSelectedProject}
				selectedProjectId={projectState.selectedProjectId}
			/>   
		</main>
		{content()}
    </div>

  </>
}
export default App
