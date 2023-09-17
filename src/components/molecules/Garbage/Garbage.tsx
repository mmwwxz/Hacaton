import { FC } from 'react';

export const Garbage: FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>
      <div className='mt-8 text-center'>
        <h3 className='text-2xl text-white font-semibold'>
          Портал для устойчивого потребительского поведения
        </h3>
        <p className='mt-2 text-white'>
          В нашем портале вы найдете информацию о устойчивых способах
          потребления и советы по снижению воздействия на окружающую среду.
        </p>
        <button className='text-white mt-4'>Button</button>
      </div>
    </div>
  );
};
