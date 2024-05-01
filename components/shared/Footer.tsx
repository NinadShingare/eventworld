import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-grey-50 p-2">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image 
          src="/assets/images/logo1.png"
          alt="logo"
          width={128}
          height={38}
          />
        </Link>
        <div className='flex flex-row'>
        <div className='flex flex-col items-start w-full max-w-[250px] '>
          <h4>Email: cyclope443@gmail.com</h4>
          <h4>Contact: +91 8408824429</h4>
        </div>
        <div className='flex flex-col items-start'>
          <h4>Address: DYPIMR, Sant Tukaram Nagar Pimpri, Pune 411018 Maharashtra, India</h4>
        </div>
        <p >Copyright &copy; 2024 EventWorld. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
