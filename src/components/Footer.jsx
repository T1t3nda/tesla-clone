import React from "react"

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto'>
        <ul className='flex flex-wrap justify-center space-x-4'>
          <li>
            <a href='#' className='hover:underline'>
              Tesla © 2024
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Privacy & Legal
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Vehicle Recalls
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              News
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Get Updates
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Locations
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
