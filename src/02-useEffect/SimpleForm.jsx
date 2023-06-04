import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:"user",
        email:"email@email"
    })

    const {username,email} = formState

    const onInputChange =({target}) =>{
        
        const{value,name} = target
        
        setFormState({
            ...formState,
            [name]: value // [propiedad computada]
        
        })
    }

    useEffect(() => {
        //console.log("se llamo use effct")
    },
        []
    )
    useEffect(() => {
        //console.log("formState changed")
    },
        [formState]
    )

    useEffect(() => {
        //console.log("email changed")
    },
        [email]
    )




    


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        

        <input
            type="text"
            className="form-control"
            placeholder="name"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className="form-control mt-1"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        
        {
            (username === "user") && <Message/>
        }

    </>
  )
}
