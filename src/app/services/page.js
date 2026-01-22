import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <div className='text-center'>
      <h1>All Services</h1>
       <Link href="/services/appDev">App Service</Link>
    </div>
  );
};

export default Services;