'use client';

import Link from 'next/link';
import React from 'react';
import { IoNotifications } from 'react-icons/io5';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function Header() {
  return (
    <nav
      className={clsxm(
        'flex flex-row items-center justify-between bg-transparent  ',
        'p-2.5 ',
        'sticky top-0 z-50 w-full',
      )}
    >
      <section className='flex'>
        <div className='flex'>
          <Link href='/' className='flex w-[220px]'>
            <Typography variant='p'>Clastic</Typography>
          </Link>
        </div>
      </section>

      {/* Mobile Version */}
      <section className='lg:hidden'>
        <div className='flex size-12 items-center justify-center rounded-xl  hover:bg-neutral-400 active:bg-neutral-500'>
          <IoNotifications size={20} />
        </div>
      </section>
    </nav>
  );
}
