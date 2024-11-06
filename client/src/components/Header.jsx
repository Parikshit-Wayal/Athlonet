import { Button, Navbar, TextInput } from 'flowbite-react';

import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-slate-400 to-pink-400 rounded-lg text-white'>
          Athlonet
        </span>
      </Link>
      <form className='flex items-center'>
        <TextInput
          type='text'
          placeholder='Search..'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
        <Button className='w-12 h-10 lg:hidden' color='gray'>
          <AiOutlineSearch className='h-5 w-5' />
        </Button>
      </form>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray'>
          <FaMoon className='ml-4' />
        </Button>
        <Link to='/sign-in'>
          <Button className='bg-gradient-to-r from-black to-gray-300 text-white h-10 w-16'>
            Sign In
          </Button>
        </Link>
        {/* Toggle button to open/close the navbar */}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} to='/' className='text-sm'>Home</Navbar.Link>
        <Navbar.Link as={Link} to='/about' className='text-sm'>About</Navbar.Link>
        <Navbar.Link as={Link} to='/contact' className='text-sm'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
