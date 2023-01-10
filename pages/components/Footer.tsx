import { NextPage } from "next"

const Footer:NextPage = () => {
  return (
    <footer className='w-full py-4 flex items-center justify-center bg-[#111]'>
        <p className='text-gray-400'>All rights reserved by <span className='text-gray-100'>Filmak</span></p>
    </footer>
  )
}

export default Footer