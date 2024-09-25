import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"

function NewProject({onAdd, onCancel}){
    const modal = useRef()

    const Title = useRef()
	const Description = useRef()
	const Time = useRef()

    // console.log(title.current)
    // console.log(description.current)
    // console.log(time.current)
    function handleSave(){
        const titleEndterd = Title.current.value
        const descriptionEnterd = Description.current.value
        const timeEnterd = Time.current.value

        if(titleEndterd.trim() == '' || descriptionEnterd.trim() == '' || timeEnterd.trim() == '' ){
            modal.current.open()
            return;
        }
        onAdd({
            title: titleEndterd,
            descripion: descriptionEnterd,
            time: timeEnterd
        })
    }

    return  <>
    <Modal ref={modal} buttonCaption={'close'} >
        <h1> invalid input </h1>
        <p>... oops looks like you forgot to add value </p>
        <p> make shure you provide a valid value for evry input field</p>
    </Modal>
    <div className="form" >
        <menu>
            <li><button onClick={onCancel}>Cancel</button></li>
            <li><button onClick={handleSave} style={{backgroundColor: 'black', color: 'white'}}>Save</button></li>
        </menu>
        
        <div>
            <Input ref={Title} name='Title' />
            <Input ref={Description} name='Description' type="text" TagType="textarea" />
            <Input ref={Time} name='Due Date' type="date" />
        </div>

    </div> </>
}

export default NewProject