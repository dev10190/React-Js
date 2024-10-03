import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <>
    <div className='text-center bg-gray-500 p-4 text-xl text-white'>Github followers : {data.followers} </div>
    <img src={data.avatar_url} width={300} alt="" />
    </>

  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}