import React from 'react'

export const Quote = ({body,title}) => {
    

  return (
    <blockquote className='blockquote text-end' >
            <p className='mb-1'>{body} </p>
            <footer className='blockquote-footer mt-1'>{title} </footer>
    </blockquote>
  )
}
