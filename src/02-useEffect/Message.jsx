import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            const coords = {x,y}
            console.log(coords)
        }

      window.addEventListener('mousemove', onMouseMove
      )
      return () => {
        removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    


  return (
    <div>
        <h3>usuario ya eXISTE</h3>
    </div>
  )
}
