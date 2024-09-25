import { forwardRef } from "react"

const Input = forwardRef(function Input({name, type = 'text', TagType = 'input' }, ref){

    return <div className="input">
    <label ref={ref} htmlFor={name}> {name} </label>
    <TagType ref={ref} type={type} name={name} id={name}  />
    </div>
})

export default Input