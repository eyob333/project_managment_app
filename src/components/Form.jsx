import Input from "./Input"

function Form(){

    return <>
    <form action="/true">
        <div className="btn">
            <button>Cancel</button>
            <button style={{backgroundColor: 'black', color: 'white'}}>Save</button>
        </div>
        <Input name='Title' />
        <Input name='Description' />
        <Input name='Due Date' type="date" />
    </form>
    </>
}

export default Form