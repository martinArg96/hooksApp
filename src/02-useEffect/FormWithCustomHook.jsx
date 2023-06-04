import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    

    const {formState, onInputChange} = useForm({
        username:"",
        email:"",
        password: ""
    })

    const {username,email,password} = formState



  return (
    <>
        <h1>Formulario con custom hook</h1>
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

<input
            type="password"
            className="form-control mt-1"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
        />


        
        {
            (username === "user") && <Message/>
        }

    </>
  )
}
