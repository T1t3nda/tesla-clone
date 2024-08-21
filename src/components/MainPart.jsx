import React from "react"

const MainPart = ({ imageSrc, heading, subheading, paragraph, buttons }) => {
  return (
    <div className='relative h-screen text-white overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src={imageSrc}
          alt='Background Image'
          className='object-cover object-center w-full h-full'
        />
      </div>

      <div className='relative z-10 flex flex-col items-center h-full text-center justify-between'>
        <div className='flex mt-28 flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold leading-tight mb-4'>{heading}</h1>
          <p className='text-lg text-gray-300 mb-8'>{subheading}</p>
          <p></p>
        </div>

        {buttons && (
          <div className='mb-8 flex space-x-4 w-full max-w-md'>
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full ${button.color}`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MainPart
