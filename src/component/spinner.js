import React from 'react'
import loader from '../loader.gif';

const spinner=()=> {

    return (
      <div className='text-center'>
        <img src={loader} alt='loading' />
      </div>
    )
  
}

export default spinner
