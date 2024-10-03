import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams()
  return (
    <div className='bg-green-500 text-xl p-4 text-center'>User : {userId} </div>
  )
}

export default User