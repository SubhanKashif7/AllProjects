import React from 'react'
import Button from "@mui/material"
function Home() {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-3'>
        <div className='flex justify-center items-start flex-col justify-center items-center gap-3'>
        <h2 className='font-semibold text-4xl font-[Poppins] text-center ml-5 '>AllProjects - WebHome , <span><b>Great</b></span> resources for developers</h2>
        <p className='text-center text-sm mr-5 ml-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat recusandae porro quidem minima sed id et maxime corrupti asperiores consectetur sapiente hic sint repellat eveniet, beatae quis cumque nemo quo.</p>
        <div className='flex  justify-ceneter items-center '>
            <Button variant='contained' sx={{
                background : "black",
               

            }} >Explore.</Button>
            
        </div>

            <h1>h</h1>

        </div>
       
    </div>
  )
}

export default Home
