import { FC, useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '/logo.svg';

export const HeaderOrganism: FC = () => {
  const Links = [
    { name: 'About', link: '/' },
    { name: 'Articles', link: '/' },
    { name: 'For Business', link: '/' },
    { name: 'Showcase', link: '/' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-black text-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img src={logo} alt='Logo Earth' />
            <span className='font-amita'>Save Earth</span>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* link items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-12' : 'top-[-490px]'
            }`}
          >
            {Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
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
    </>
  );
};
