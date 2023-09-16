import Image from 'next/image';
import React from 'react';
import spinner from '../public/loader.gif';

const Spinner = () => {
  return (
    <>
      <Image className='w-[10vw] h-[10vw] m-auto block' src={spinner} alt='loading..' />
    </>
  );
};

export default Spinner;
