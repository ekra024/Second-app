import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <div className='text-center'>
      <h1 className='text-2xl mb-5'>All Services</h1>
       <Link href="/services/appDev" className='block'>App Service</Link>
       <Link href="/services/webDev">Web Service</Link>
    </div>
  );
};

export default Services;