import { FC, useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '/logo.svg';

export const HeaderOrganism: FC = () => {
  const Links = [
    { name: 'Blog', link: '/blog' },
    { name: 'Articles', link: '/' },
    { name: 'For Business', link: '/' },
    { name: 'Showcase', link: '/' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-black text-white py-4 md:px-10 px-7'>
        {/* Logo */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-2'>
          <img src={logo} alt='Logo Earth' className='h-8 w-8' />{' '}
          <span className='font-amita text-xl'>Save Earth</span>{' '}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='md:hidden flex items-center cursor-pointer'
        >
          {open ? (
            <XMarkIcon className='w-6 h-6' />
          ) : (
            <Bars3BottomRightIcon className='w-6 h-6' />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : '-top-[490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-6 md:my-0 my-4 font-semibold'>
              <a
                href={link.link}
                className='text-gray-200 hover:text-blue-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
