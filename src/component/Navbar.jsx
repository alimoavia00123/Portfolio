import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-linear-to-r from-[#090d18] to-[#111720] h-16 w-full flex items-center justify-between px-10'>

        <div>
        <h1 className="text-2xl font-bold text-[#38BDF8]">
        Creation<span className='text-white'>with</span><span className="text-[#34D399]">Ali</span>
      </h1>
        </div>
        <div>
          <ul className=' text-white gap-5 flex font-sans font-bold '>
            <a href="#home"className='hover:text-[#38BDF8]'>Home</a>
            <a href="#profile"className='hover:text-[#38BDF8]' >Profile</a>
            <a href="#skills"className='hover:text-[#38BDF8]' >Skill</a>
            <a href="#clients"className='hover:text-[#38BDF8]' >Clients</a>
            <a href="#contact"className='hover:text-[#38BDF8]' >Contact</a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
