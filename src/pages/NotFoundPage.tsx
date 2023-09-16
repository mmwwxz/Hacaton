import { FC } from 'react';
import cat from '/cat.svg';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <div className='max-w-md'>
          <div className='text-5xl font-dark font-bold'>404</div>
          <p className='text-2xl md:text-3xl font-light leading-normal'>
            Sorry we couldn't find this page.
          </p>
          <p className='mb-8'>
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>

          <Link to='/'>
            <button className='px-4 inline py-2 text-sm font-medium leading-5 shadow rounded-lg focus:outline-none transition duration-300 ease-in-out bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md'>
              Back to homepage
            </button>
          </Link>
        </div>
        <div className='max-w-lg'>
          <img src={cat} alt='cat' />
        </div>
      </div>
    </div>
  );
};
