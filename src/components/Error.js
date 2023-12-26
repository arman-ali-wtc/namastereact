import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'

export default function Error() {
    const err = useRouteError()
  return (
    <>
    <Header />
    <div className='error-container'>
        <h1>{err.status} : {err.statusText}</h1>
    </div>
    </>
    
  )
}
