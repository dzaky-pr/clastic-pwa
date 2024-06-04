import * as React from 'react';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import Navbar from '@/layouts/Navbar';
import { LayoutProps } from '@/types/layout';

export default function Layout({
  children,
  withFooter,
  withNavbar,
  withHeader,
}: LayoutProps) {
  return (
    <main className='mx-auto my-0 min-h-full max-w-[480px] bg-[#29adc5] pb-[100px]'>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
      {withNavbar && <Navbar />}
    </main>
  );
}
