import React from 'react'
const ComingSoonComponent = () => {
  return (
    <div className='h-screen w-full bg-center bg-cover bg-[#0B1E44]' style={{backgroundImage: 'url(landingPageBg.png)'}}>
        <div className='absolute top-3 flex items-center justify-center px-5'>
            <img className='w-[55px] md:w-[83px]' src="E-CELL LOGO WHITE.png" alt="" />
        </div>
        <div className='absolute inset-0 flex items-center justify-center px-5'>
            <img className='md:w-[600px] lg:w-[800px]' src="ascentLogo-white.png" alt="" />
        </div>
        <div className='absolute inset-0 flex items-center justify-center px-5'>
            <div className='text-white mt-96 text-3xl md:text-5xl'>Coming Soon ...</div>
        </div>
    </div>
  )
}

export default ComingSoonComponent