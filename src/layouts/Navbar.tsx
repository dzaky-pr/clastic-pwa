'use client';

import { FaCamera, FaUser } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { IoHome } from 'react-icons/io5';
import { MdArticle } from 'react-icons/md';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/Typography';

export default function Navbar() {
  return (
    <nav className=' fixed bottom-0 z-50 m-0 flex h-20 w-full max-w-[480px] list-none justify-between border-t border-[#dedede] bg-white p-2.5 text-center align-middle font-semibold leading-[13px] text-black no-underline'>
      <ButtonLink variant='ghost' href='#' className='flex flex-col gap-1 px-1'>
        <IoHome size={20} />
        <Typography variant='p'>Home</Typography>
      </ButtonLink>
      <ButtonLink variant='ghost' href='#' className='flex flex-col gap-1 px-1'>
        <MdArticle size={20} />
        <Typography variant='p'>Article</Typography>
      </ButtonLink>
      <div className=' relative flex h-full w-[72px] items-center justify-center'>
        {' '}
        <ButtonLink
          variant='blue'
          href='#'
          className='absolute inset-y-0 -top-12 flex h-[84px] w-[84px] flex-col gap-1 rounded-full px-0'
        >
          <FaCamera size={20} />
          <Typography variant='p'>Classifier</Typography>
        </ButtonLink>
      </div>

      <ButtonLink variant='ghost' href='#' className='flex flex-col gap-1 px-1'>
        <HiSpeakerphone size={20} />
        <Typography variant='p'>Mission</Typography>
      </ButtonLink>
      <ButtonLink variant='ghost' href='#' className='flex flex-col gap-1 px-1'>
        <FaUser size={20} />
        <Typography variant='p'>Profile</Typography>
      </ButtonLink>
    </nav>
  );
}
