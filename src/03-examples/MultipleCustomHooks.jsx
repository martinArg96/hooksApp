import { useFetch, useCounter} from '../hooks'
import { LoadingQuote } from './LoadingQuote'
import { Quote } from './Quote'



export const MultipleCustomHooks = () => {

   const {counter,increment,decrement,reset} = useCounter(1)
   const {data,isLoading,hasError} = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
   console.log({data,isLoading,hasError})

   // const{ author , quote } = !!data && data[0];

//    function handleNext(){
//         increment()
//    }
   

  return (
    <>
        <h2>Fetch Quotes</h2>
        <hr />

        {
            isLoading?
            <LoadingQuote />
            :
            <Quote body={data.body} title={data.title} />
        }

        <div className='d-flex justify-content-around mt-5'>
        <button 
        onClick={(e) => decrement()} 
         className='btn btn-danger'
         disabled={isLoading}>previous quote</button>
        <button 
        onClick={(e) => increment()} 
         className='btn btn-success '
         disabled={isLoading}>next quote</button>
        {
        //ojo cuidad con la funcion onclick tener en cuenta:
        //onClick={increment} manda como atributo un evento y rompe la funcion
        }
        

        </div>
        
        
    </>
  )
}
