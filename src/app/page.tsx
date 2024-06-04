'use client';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaCrown } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { PiCoinsDuotone } from 'react-icons/pi';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';

type JENIS_JENIS_PLASTIK = {
  src: string;
  name: string;
  href: string;
};

const JenisJenisPlastik: JENIS_JENIS_PLASTIK[] = [
  { src: '/NotFound.png', name: 'PET', href: '#' },
  { src: '/NotFound.png', name: 'HDPE', href: '#' },
  { src: '/NotFound.png', name: 'PVC', href: '#' },
  { src: '/NotFound.png', name: 'LDPE', href: '#' },
  { src: '/NotFound.png', name: 'PP', href: '#' },
  { src: '/NotFound.png', name: 'PS', href: '#' },
  { src: '/NotFound.png', name: 'Other', href: '#' },
];

export default function Home() {
  return (
    <Layout withFooter withNavbar withHeader>
      <section className='flex h-full w-full flex-col bg-[#29adc5] p-4 pt-3'>
        <Typography variant='h4' className='pb-3'>
          Hai, Dzaky!
        </Typography>
        <div className='flex flex-row items-center justify-between rounded-full bg-white p-3'>
          <div className='flex w-fit flex-row gap-1.5'>
            <PiCoinsDuotone size={24} className='text-blue-200' />
            <Typography variant='h6'>2,000 pts</Typography>
          </div>
          <div className='flex flex-row items-center justify-center gap-1.5 rounded-full bg-yellow-200 px-3 py-2'>
            <FaCrown size={16} />
            <Typography variant='sm'>Gold</Typography>
          </div>
        </div>
        <Typography variant='sm' className='pt-3 text-center'>
          Mau koin tambahan?
        </Typography>
      </section>

      <section className='flex h-full w-full flex-col rounded-t-3xl bg-white p-4'>
        <Typography variant='h5' className=''>
          Tukarkan Plastikmu ♻️
        </Typography>
        <Typography variant='sm' className=''>
          Lorem ipsum dolor sit amet
        </Typography>
        <div className='mt-2 flex w-full flex-row gap-2'>
          <UnstyledLink
            href='#'
            className='flex flex-row items-center justify-center gap-0.5 rounded-xl border-2 border-blue-300 p-2'
          >
            <div className='flex flex-col gap-0.5'>
              <Typography variant='h6' className=''>
                Drop Off Point 📍
              </Typography>
              <Typography variant='sm' className=''>
                Pilih dropoff point terdekat dan tukarkan plastikmu!
              </Typography>
            </div>
            <IoIosArrowForward className='text-blue-600' size={20} />
          </UnstyledLink>
          <UnstyledLink
            href='#'
            className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-blue-300 p-2 text-center'
          >
            <NextImage src='/NotFound.png' width={60} height={60} alt='PET' />
            <Typography variant='sm' className=''>
              My Barcode
            </Typography>
          </UnstyledLink>
        </div>
      </section>

      <section className='mt-1 flex h-full w-full flex-col  bg-white p-4'>
        <Typography variant='h5' className=''>
          Misi Plastik ✨
        </Typography>
        <Typography variant='sm' className=''>
          Kumpulkan poinmu dari tiap misi dan tukarkan!
        </Typography>

        <div className='flex h-full w-screen items-center justify-center py-6'>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={0}
            className='mySwiper relative'
            centeredSlides={false}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {/* {TestimonialText.map((card, index) => ( */}
            <SwiperSlide className='h-full w-fit'>
              {/* <CardTestimonial
                  name={card.name}
                  comment={card.comment}
                  description={card.description}
                /> */}
              lorem
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
      </section>

      <section className='mt-1 flex h-full w-full flex-col bg-white p-4'>
        <Typography variant='h5' className='pb-3'>
          Jenis - Jenis Plastik 🗑️
        </Typography>
        <div className='flex w-full flex-row gap-3 overflow-x-auto'>
          {JenisJenisPlastik.map((e, index) => (
            <UnstyledLink
              key={index}
              href={e.href}
              className='flex flex-col items-center justify-center'
            >
              <NextImage src={e.src} width={60} height={60} alt='PET' />

              <Typography variant='p'>{e.name}</Typography>
            </UnstyledLink>
          ))}
        </div>
      </section>
    </Layout>
  );
}
