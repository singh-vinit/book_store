import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";

const Spinner = () => {
  return (
    <div className='animate-spin h-4 w-4 text-red-500'>
        <AiOutlineLoading />
    </div>
  )
}

export default Spinner