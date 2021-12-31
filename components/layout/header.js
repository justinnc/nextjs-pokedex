import Image from 'next/image';
import Link from 'next/link';

import {
  Navbar,
  Container,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { CgSearch } from 'react-icons/cg';

const Header = () => {
  return (
    <Navbar
      className='justify-between w-full shadow-lg '
      expand='lg'
      variant='light'
      bg='light'
    >
      <div className='flex items-center justify-between h-16 mx-6 md:mx-12'>
        <div className='flex h-10 bg-gray-100 border-2 border-gray-500 rounded-full align-center'>
          <InputGroup className='flex pl-2'>
            <FormControl
              placeholder='Search...'
              aria-label='search pokemon'
              className='w-32 ml-2 bg-gray-100 outline-none md:w-52'
            />
            <InputGroup.Text id='' className='flex items-center pr-2'>
              <CgSearch className='text-xl text-sky-500 ' />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <Navbar.Brand>
          <Link href='/pokemon'>
            <a className='text-xl md:text-3xl subpixel-antialiased font-[500] text-stone-500'>
              PokéDex
            </a>
          </Link>
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Header;
