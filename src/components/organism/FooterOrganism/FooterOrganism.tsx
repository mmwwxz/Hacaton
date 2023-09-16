import { FC } from 'react';
import { Link } from 'react-router-dom';

export const FooterOrganism: FC = () => {
  return (
    <footer className='bg-gray-800 rounded-lg shadow m-4 fixed bottom-0 w-full'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link
            to='/'
            className='hover:underline text-gray-500 dark:text-gray-400'
          >
            Hacaton
          </Link>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link to='/about' className='mr-4 hover:underline md:mr-6'>
              About
            </Link>
          </li>
          <li>
            <Link to='/privacy' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to='/licensing' className='mr-4 hover:underline md:mr-6'>
              Licensing
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
