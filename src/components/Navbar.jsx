import React, { useState, useRef, useEffect } from "react"
import logo_icon from "../assets/Logo.svg"
import help_icon from "../assets/help.svg"
import user_icon from "../assets/user.svg"
import world_icon from "../assets/world.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <nav className='bg-transparent fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='flex flex-wrap items-center justify-between mx-7 p-4'>
          <a
            href='#'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src={logo_icon} className='h-5' alt='Tesla Logo' />
          </a>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <div className='hidden md:flex text-white gap-2'>
              <img
                src={help_icon}
                className='h-6 cursor-pointer'
                alt='Help Icon'
              />
              <img
                src={world_icon}
                className='h-6 cursor-pointer'
                alt='World Icon'
              />
              <img
                src={user_icon}
                className='h-6 cursor-pointer'
                alt='User Icon'
              />
            </div>
            <button
              type='button'
              onClick={toggleSidebar}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded={isOpen}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              {["Vehicles", "Energy", "Charging", "Discover", "Shop"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='block text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                      aria-current={item === "Vehicles" ? "page" : undefined}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed z-20 top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleSidebar} className='p-2 text-right'>
          Close
        </button>
        <div className='p-4'>
          <h2 className='text-lg font-bold'>Sidebar</h2>
          <p>
            <ul>
              {["Vehicles", "Energy", "Charging", "Discover", "Shop"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='block text-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                      aria-current={item === "Vehicles" ? "page" : undefined}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50'
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default Navbar
