
import { 
    Button, 
    MegaMenu, 
    MegaMenuDropdown, 
    Navbar, 
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle
  } from 'flowbite-react';
import Link from 'next/link';
  
  function NavbarHero() {
    return (
      <MegaMenu>
        <NavbarBrand href="/">
          <img alt="" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-blue-700">Learnby</span>
        </NavbarBrand>
        <div className="order-2 hidden items-center md:flex">
        
          <Link href={"/login"} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
            Login
          </Link>
          <Link href={"/register"} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            Registro
          </Link>
      
        </div>
        {/* <NavbarToggle /> */}
    
      </MegaMenu>
    );
  }

export default NavbarHero
  