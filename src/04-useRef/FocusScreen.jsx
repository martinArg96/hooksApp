import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()
    
    

    function onfocus(){
        //document.querySelector('input').select()
        //console.log(inputRef)
        inputRef.current.select()
    }

  return (
    <div>
        <h2>fouchs FocusScreen</h2>
        <hr />
        <input ref={inputRef} type="text" placeholder='ingrese algo' className='form-control' />
    
    <button 
    className='btn btn-primary mt-2'
    onClick={onfocus}
    
    >
        Set Focus</button>
    
    </div>
  )
}
