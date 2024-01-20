'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../(components)/assets/logo.svg'
import { NavMenu } from './header'
import Link from 'next/link'

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string>('Dashboard')
  return (
    <aside className="hidden fixed left-0 lg:block h-full bg-white pt-[44px] pl-[102px] pr-[18px]">
      <Link href={'/'}>
      <Image src={logo} width={0} height={0} alt='logo' className=''/>
      </Link>
      <nav className='mt-[132px]'>
        <NavMenu activeLink={activeLink} setActiveLink={setActiveLink}/>
      </nav>
    </aside>
  )
}

export default Sidebar