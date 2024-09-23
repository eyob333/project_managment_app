
function Input({name, type = 'text'}){

    return <>
    <label htmlFor={name}> {name} </label>
    <input type={type} name={name} id={name} />
    </>
}

export default Input